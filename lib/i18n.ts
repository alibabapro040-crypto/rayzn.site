export type Lang = "tr" | "en";

export const DEFAULT_LANG: Lang = "tr";

const dict = {
  tr: {
    brand: "RAYZN",
    nav_home: "Ana Sayfa",
    nav_market: "Piyasa",
    nav_analysis: "Analizler",
    nav_community: "Topluluk",
    nav_contact: "İletişim",
    hero_title: "Analiz. Takip Et. Kazan.",
    hero_sub: "BIST hisseleri için teknik analiz, haber ve sinyal merkezi.",
    cta_market: "Piyasaya Git",
    cta_analysis: "Analizleri Gör",
    quick_watch: "Hızlı İzleme",
    latest_analysis: "Son Analizler",
    read_more: "Devamını oku",
    no_data: "Henüz içerik yok.",
    market_title: "Piyasa",
    market_sub: "Seçili hisseler (örnek). Logoları daha sonra gerçek logolarınla değiştirebilirsin.",
    analyses_title: "Analizler",
    analyses_sub: "Günlük/haftalık analiz, strateji notları ve eğitim içerikleri.",
    lang_tr: "TR",
    lang_en: "EN",
  },
  en: {
    brand: "RAYZN",
    nav_home: "Home",
    nav_market: "Market",
    nav_analysis: "Analysis",
    nav_community: "Community",
    nav_contact: "Contact",
    hero_title: "Analyze. Track. Win.",
    hero_sub: "Technical analysis, news, and signals for BIST stocks.",
    cta_market: "Go to Market",
    cta_analysis: "View Analysis",
    quick_watch: "Quick Watch",
    latest_analysis: "Latest Analysis",
    read_more: "Read more",
    no_data: "No content yet.",
    market_title: "Market",
    market_sub: "Selected symbols (sample). Replace icons with your real logos later.",
    analyses_title: "Analysis",
    analyses_sub: "Daily/weekly analysis, strategy notes, and education posts.",
    lang_tr: "TR",
    lang_en: "EN",
  },
} as const;

export function t(lang: Lang, key: keyof typeof dict.tr) {
  return dict[lang][key] ?? dict[DEFAULT_LANG][key];
}
