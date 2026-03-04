export type Stock = {
  symbol: string;
  name: string;
  sector?: string;
};

export const STOCKS: Stock[] = [
  { symbol: "THYAO", name: "Türk Hava Yolları", sector: "Ulaştırma" },
  { symbol: "GARAN", name: "Garanti BBVA", sector: "Bankacılık" },
  { symbol: "ASELS", name: "Aselsan", sector: "Savunma" },
  { symbol: "KCHOL", name: "Koç Holding", sector: "Holding" },
  { symbol: "SAHOL", name: "Sabancı Holding", sector: "Holding" },
];
