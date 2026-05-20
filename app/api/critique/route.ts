import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { CRITIQUE_SYSTEM_PROMPT } from "@/lib/critique-prompt";
import { checkAndIncrementUsage } from "@/lib/rate-limit";
import type { CritiqueResponse } from "@/types/critique";

export const runtime = "nodejs";
export const maxDuration = 60;

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_SIZE_BYTES = 8 * 1024 * 1024;

export async function POST(req: NextRequest) {
  try {
    const identifier =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "anonymous";
    const isPaid = false;

    const usage = checkAndIncrementUsage(identifier, isPaid);
    if (!usage.allowed) {
      return NextResponse.json(
        {
          error: "rate_limited",
          message: `You've used all ${usage.limit} free critiques this month. Upgrade to continue.`,
          remaining: 0,
          limit: usage.limit,
        },
        { status: 429 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "no_image", message: "No image was uploaded." },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: "invalid_type",
          message: "Please upload a JPEG, PNG, WebP, or GIF.",
        },
        { status: 400 }
      );
    }

    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json(
        {
          error: "too_large",
          message: "Image must be under 8MB.",
        },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY not configured");
      return NextResponse.json(
        {
          error: "server_error",
          message: "Critique service is not configured. Set ANTHROPIC_API_KEY.",
        },
        { status: 500 }
      );
    }

    const client = new Anthropic({ apiKey });

    const result = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 2000,
      system: CRITIQUE_SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: file.type as
                  | "image/jpeg"
                  | "image/png"
                  | "image/webp"
                  | "image/gif",
                data: base64,
              },
            },
            {
              type: "text",
              text: "Critique this food photograph. Respond with the JSON object only.",
            },
          ],
        },
      ],
    });

    const textBlock = result.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      return NextResponse.json(
        { error: "no_response", message: "The critique service returned no text." },
        { status: 502 }
      );
    }

    let parsed: CritiqueResponse | { error: string; message: string };
    try {
      const clean = textBlock.text
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim();
      parsed = JSON.parse(clean);
    } catch (e) {
      console.error("JSON parse error", e, "raw text:", textBlock.text);
      return NextResponse.json(
        {
          error: "parse_error",
          message: "Couldn't parse the critique. Try a different photo.",
        },
        { status: 502 }
      );
    }

    if ("error" in parsed) {
      return NextResponse.json(parsed, { status: 422 });
    }

    return NextResponse.json({
      ...parsed,
      _meta: {
        remaining: usage.remaining,
        limit: usage.limit,
      },
    });
  } catch (err) {
    console.error("Critique route error:", err);
    return NextResponse.json(
      {
        error: "server_error",
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
