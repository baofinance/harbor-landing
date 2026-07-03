type AnchorMarketLike = {
  marketId: string;
  bestApr: number;
};

type SailMarketLike = {
  marketId: string;
  leverageRatio?: number | null;
};

export function isPreDepositAnchorMarket(market: AnchorMarketLike) {
  return !(Number(market.bestApr) > 0);
}

export function isPreDepositSailMarket(market: SailMarketLike) {
  const ratio = market.leverageRatio;
  if (ratio == null) return true;
  return Number(ratio) >= 20;
}

export function getPreDepositMarketIds(
  anchorMarkets: AnchorMarketLike[],
  sailMarkets: SailMarketLike[]
) {
  const ids = new Set<string>();

  for (const market of anchorMarkets) {
    if (isPreDepositAnchorMarket(market)) {
      ids.add(market.marketId);
    }
  }

  for (const market of sailMarkets) {
    if (isPreDepositSailMarket(market)) {
      ids.add(market.marketId);
    }
  }

  return ids;
}
