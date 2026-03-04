"use client";

import React, { useMemo, useState } from "react";
import { STOCKS } from "@/data/stocks";
import StockLogo from "@/components/stock-logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";

export default function MarketPage() {
  const { lang } = useLanguage();
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    if (!qq) return STOCKS;
    return STOCKS.filter((s) => (s.symbol + " " + s.name).toLowerCase().includes(qq));
  }, [q]);

  return (
    <main className="container py-16 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold mb-3">{t(lang, "market_title")}</h1>
      <p className="text-zinc-400 mb-8">{t(lang, "market_sub")}</p>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Sembol veya isim ara…"
        className="w-full md:max-w-md rounded-2xl border border-border bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/30 mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((s) => (
          <Card key={s.symbol} className="hover:bg-white/5 transition-colors">
            <CardHeader className="flex flex-row items-center gap-4">
              <StockLogo symbol={s.symbol} size={52} />
              <div className="min-w-0">
                <CardTitle className="text-xl">{s.symbol}</CardTitle>
                <div className="text-sm text-zinc-400 truncate">{s.name}</div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-xs text-zinc-500">{s.sector ?? ""}</div>
              <div className="mt-3 text-sm text-zinc-300">
                (API bağlayınca burada anlık fiyat / günlük değişim göstereceğiz.)
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
