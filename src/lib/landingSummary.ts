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

export const DEFAULT_TIDE_FALLBACK = {
  treasuryOwnershipPercent: DEFAULT_TIDE_TARGETS.treasuryTargetPercent,
  polOwnershipPercent: 0.5,
} as const;

function normalizePercent(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
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

export function formatPercent(value: number, digits?: number): string {
  const resolvedDigits =
    digits ?? (value > 0 && value < 1 ? 2 : 1);
  return `${value.toFixed(resolvedDigits)}%`;
}

export function getTideMetricDisplay(
  metric: "treasury" | "pol",
  tideEconomics: TideEconomicsSummary | null
): {
  label: string;
  currentPercent: number;
  targetPercent: number;
  isLiveData: boolean;
} {
  if (metric === "treasury") {
    return {
      label: "Treasury ownership",
      currentPercent:
        tideEconomics?.treasuryOwnershipPercent ??
        DEFAULT_TIDE_FALLBACK.treasuryOwnershipPercent,
      targetPercent:
        tideEconomics?.treasuryTargetPercent ??
        DEFAULT_TIDE_TARGETS.treasuryTargetPercent,
      isLiveData: tideEconomics !== null,
    };
  }

  return {
    label: "Protocol-owned liquidity",
    currentPercent:
      tideEconomics?.polOwnershipPercent ??
      DEFAULT_TIDE_FALLBACK.polOwnershipPercent,
    targetPercent:
      tideEconomics?.polTargetPercent ?? DEFAULT_TIDE_TARGETS.polTargetPercent,
    isLiveData: tideEconomics !== null,
  };
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
