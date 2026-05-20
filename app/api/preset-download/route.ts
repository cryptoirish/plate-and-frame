import { NextRequest, NextResponse } from "next/server";
import { PRESETS } from "@/lib/presets";

export const runtime = "nodejs";

const ATTRIBUTE_MAP: Record<string, string> = {
  Temperature: "Temperature",
  Tint: "Tint",
  Exposure: "Exposure2012",
  Contrast: "Contrast2012",
  Highlights: "Highlights2012",
  Shadows: "Shadows2012",
  Whites: "Whites2012",
  Blacks: "Blacks2012",
  Clarity: "Clarity2012",
  Dehaze: "Dehaze",
  Texture: "Texture",
  Vibrance: "Vibrance",
  Saturation: "Saturation",
  "Orange Hue": "HueAdjustmentOrange",
  "Orange Saturation": "SaturationAdjustmentOrange",
  "Yellow Luminance": "LuminanceAdjustmentYellow",
  "Red Luminance": "LuminanceAdjustmentRed",
  "Blue Luminance": "LuminanceAdjustmentBlue",
  "Green Hue": "HueAdjustmentGreen",
  "Green Saturation": "SaturationAdjustmentGreen",
  "Green Luminance": "LuminanceAdjustmentGreen",
  "Yellow Hue": "HueAdjustmentYellow",
};

function buildXMP(presetName: string, adjustments: { label: string; value: string }[]): string {
  const attrs = adjustments
    .map((a) => {
      const xmpKey = ATTRIBUTE_MAP[a.label];
      if (!xmpKey) return null;
      return `   crs:${xmpKey}="${a.value}"`;
    })
    .filter(Boolean)
    .join("\n");

  return `<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Plate & Frame">
 <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description rdf:about=""
    xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/"
    crs:PresetType="Normal"
    crs:Cluster=""
    crs:UUID="${crypto.randomUUID()}"
    crs:SupportsAmount="False"
    crs:SupportsColor="True"
    crs:SupportsMonochrome="True"
    crs:SupportsHighDynamicRange="True"
    crs:SupportsNormalDynamicRange="True"
    crs:SupportsSceneReferred="True"
    crs:SupportsOutputReferred="True"
    crs:CameraModelRestriction=""
    crs:Copyright="Plate &amp; Frame"
    crs:ContactInfo=""
    crs:Version="15.0"
    crs:ProcessVersion="11.0"
${attrs}
    crs:HasSettings="True">
   <crs:Name>
    <rdf:Alt>
     <rdf:li xml:lang="x-default">${presetName}</rdf:li>
    </rdf:Alt>
   </crs:Name>
   <crs:ShortName>
    <rdf:Alt>
     <rdf:li xml:lang="x-default">${presetName}</rdf:li>
    </rdf:Alt>
   </crs:ShortName>
   <crs:Group>
    <rdf:Alt>
     <rdf:li xml:lang="x-default">Plate &amp; Frame</rdf:li>
    </rdf:Alt>
   </crs:Group>
  </rdf:Description>
 </rdf:RDF>
</x:xmpmeta>
`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const preset = PRESETS.find((p) => p.slug === slug);
  if (!preset) {
    return NextResponse.json({ error: "Preset not found" }, { status: 404 });
  }

  const xmp = buildXMP(preset.name, preset.adjustments);

  return new NextResponse(xmp, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${preset.slug}.xmp"`,
    },
  });
}
