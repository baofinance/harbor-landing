export type TideEconomicsSummary = {
  treasuryOwnershipPercent: number;
  treasuryTargetPercent: number;
  polOwnershipPercent: number;
  polTargetPercent: number;
};

export type LandingSummaryResponse = {
  generatedAt?: string;
  tideEconomics?: TideEconomicsSummary;
};

export const LANDING_SUMMARY_URL = "/api/landing/summary";

export const DEFAULT_TIDE_TARGETS = {
  treasuryTargetPercent: 30,
  polTargetPercent: 15,
} as const;

function normalizePercent(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
  }

  if (value > 0 && value <= 1) {
    return value * 100;
  }

  return value;
}

export function parseTideEconomics(
  data: LandingSummaryResponse | null | undefined
): TideEconomicsSummary | null {
  const tideEconomics = data?.tideEconomics;
  if (!tideEconomics) {
    return null;
  }

  const treasuryOwnershipPercent = normalizePercent(
    tideEconomics.treasuryOwnershipPercent
  );
  const treasuryTargetPercent =
    normalizePercent(tideEconomics.treasuryTargetPercent) ??
    DEFAULT_TIDE_TARGETS.treasuryTargetPercent;
  const polOwnershipPercent = normalizePercent(
    tideEconomics.polOwnershipPercent
  );
  const polTargetPercent =
    normalizePercent(tideEconomics.polTargetPercent) ??
    DEFAULT_TIDE_TARGETS.polTargetPercent;

  if (treasuryOwnershipPercent === null || polOwnershipPercent === null) {
    return null;
  }

  return {
    treasuryOwnershipPercent,
    treasuryTargetPercent,
    polOwnershipPercent,
    polTargetPercent,
  };
}

export function formatPercent(value: number, digits = 1): string {
  return `${value.toFixed(digits)}%`;
}

export function progressFillPercent(
  currentPercent: number,
  targetPercent: number
): number {
  if (targetPercent <= 0) {
    return 0;
  }

  return Math.min(100, (currentPercent / targetPercent) * 100);
}
