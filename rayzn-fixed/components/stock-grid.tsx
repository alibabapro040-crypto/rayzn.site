import Link from "next/link";
import { STOCKS } from "@/data/stocks";
import StockLogo from "@/components/stock-logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StockGrid({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="mt-10">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {subtitle ? <p className="text-sm text-zinc-400">{subtitle}</p> : null}
        </div>
        <Link href="/market" className="text-sm text-zinc-300 hover:text-white">Tümü →</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {STOCKS.map((s) => (
          <Link key={s.symbol} href={`/market?symbol=${s.symbol}`}>
            <Card className="hover:bg-white/5 transition-colors">
              <CardHeader className="flex flex-row items-center gap-3">
                <StockLogo symbol={s.symbol} size={44} />
                <div className="min-w-0">
                  <CardTitle className="text-base truncate">{s.symbol}</CardTitle>
                  <div className="text-xs text-zinc-400 truncate">{s.name}</div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-xs text-zinc-500">{s.sector ?? ""}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
