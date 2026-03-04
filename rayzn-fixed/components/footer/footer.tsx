"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="border-t border-border mt-16">
      <div className="container py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div className="text-sm text-zinc-400">
          © {new Date().getFullYear()} {t(lang, "brand")} • Hisse Analiz
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/analizler" className="text-zinc-300 hover:text-white">{t(lang, "nav_analysis")}</Link>
          <Link href="/market" className="text-zinc-300 hover:text-white">{t(lang, "nav_market")}</Link>
          <Link href="/api/health" className="text-zinc-500 hover:text-zinc-300">Status</Link>
        </div>
      </div>
    </footer>
  );
}
