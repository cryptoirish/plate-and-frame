// Simple in-memory rate limiter for freemium gating.
// In production: replace with Upstash Redis or your DB.
// Tracks critique count per identifier (user ID or IP) per calendar month.

type UsageRecord = {
  count: number;
  monthKey: string;
};

const usage = new Map<string, UsageRecord>();

const FREE_TIER_LIMIT = 3;

function currentMonthKey(): string {
  const d = new Date();
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

export function checkAndIncrementUsage(
  identifier: string,
  isPaid: boolean
): { allowed: boolean; remaining: number; limit: number } {
  if (isPaid) {
    return { allowed: true, remaining: Infinity, limit: Infinity };
  }

  const monthKey = currentMonthKey();
  const existing = usage.get(identifier);

  if (!existing || existing.monthKey !== monthKey) {
    usage.set(identifier, { count: 1, monthKey });
    return { allowed: true, remaining: FREE_TIER_LIMIT - 1, limit: FREE_TIER_LIMIT };
  }

  if (existing.count >= FREE_TIER_LIMIT) {
    return { allowed: false, remaining: 0, limit: FREE_TIER_LIMIT };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: FREE_TIER_LIMIT - existing.count,
    limit: FREE_TIER_LIMIT,
  };
}

export function getRemainingCritiques(identifier: string, isPaid: boolean): number {
  if (isPaid) return Infinity;
  const existing = usage.get(identifier);
  if (!existing || existing.monthKey !== currentMonthKey()) return FREE_TIER_LIMIT;
  return Math.max(0, FREE_TIER_LIMIT - existing.count);
}
