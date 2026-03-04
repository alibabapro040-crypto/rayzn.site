// Yahoo Finance API ile hisse verisi çekme

export interface StockPrice {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
  lastUpdated: string;
}

// BIST hisseleri için .IS eki gerekli
const YAHOO_SYMBOLS: Record<string, string> = {
  "THYAO": "THYAO.IS",
  "GARAN": "GARAN.IS",
  "ASELS": "ASELS.IS",
  "KCHOL": "KCHOL.IS",
  "SAHOL": "SAHOL.IS",
};

export async function getStockPrice(symbol: string): Promise<StockPrice | null> {
  try {
    const yahooSymbol = YAHOO_SYMBOLS[symbol] || `${symbol}.IS`;
    
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${yahooSymbol}?interval=1d&range=1d`,
      { next: { revalidate: 60 } } // 60 saniye cache
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.chart || !data.chart.result || data.chart.result.length === 0) {
      throw new Error("No data available");
    }

    const result = data.chart.result[0];
    const meta = result.meta;
    const quote = result.indicators?.quote?.[0];
    
    // Son fiyat ve önceki kapanış
    const currentPrice = meta.regularMarketPrice || 0;
    const previousClose = meta.previousClose || meta.chartPreviousClose || 0;
    
    // Değişim hesapla
    const change = currentPrice - previousClose;
    const changePercent = previousClose ? (change / previousClose) * 100 : 0;

    return {
      symbol,
      price: currentPrice,
      change: Number(change.toFixed(2)),
      changePercent: Number(changePercent.toFixed(2)),
      currency: meta.currency || "TRY",
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`Error fetching ${symbol}:`, error);
    return null;
  }
}

// Tüm hisseleri çek
export async function getAllStockPrices(symbols: string[]): Promise<StockPrice[]> {
  const promises = symbols.map(symbol => getStockPrice(symbol));
  const results = await Promise.all(promises);
  return results.filter((price): price is StockPrice => price !== null);
      }
