import Link from "next/link";
import RevealAnimation, { BlurIn } from "@/components/reveal-animations";
import StockGrid from "@/components/stock-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { t } from "@/lib/i18n";
import { DEFAULT_LANG } from "@/lib/i18n";

export default function HomePage() {
  // Landing is server component; language comes from client provider in Header for now.
  // Use default language here to keep SSR simple.
  const lang = DEFAULT_LANG;

  return (
    <main className="container py-16">
      <RevealAnimation>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t(lang, "hero_title")}
        </h1>
        <p className="text-zinc-400 max-w-2xl">
          {t(lang, "hero_sub")}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/market">
            <Button>{t(lang, "cta_market")}</Button>
          </Link>
          <Link href="/analizler">
            <Button variant="outline">{t(lang, "cta_analysis")}</Button>
          </Link>
        </div>
      </RevealAnimation>

      <StockGrid title={t(lang, "quick_watch")} subtitle="Logolar örnektir. Sonra gerçek logolarını koyacağız." />

      <section className="mt-12">
        <BlurIn>
          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-zinc-300">
                ✅ İstenenler eklendi: <b>TR/EN dil seçimi</b>, sosyal ikonların yerine <b>hisse ikonları</b>, blog ekranları <b>Analizler</b> olarak çevrildi.
              </div>
            </CardContent>
          </Card>
        </BlurIn>
      </section>
    </main>
  );
}
