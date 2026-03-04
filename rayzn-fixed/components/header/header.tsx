"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LanguageSwitch from "@/components/language-switch";
import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        "text-sm px-3 py-2 rounded-xl transition-colors",
        active ? "bg-white/10 text-white" : "text-zinc-300 hover:text-white hover:bg-white/5"
      )}
    >
      {label}
    </Link>
  );
};

export default function Header() {
  const { lang } = useLanguage();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-black/40 backdrop-blur">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white text-black grid place-items-center font-black">R</div>
          <div className="leading-tight">
            <div className="font-semibold">{t(lang, "brand")}</div>
            <div className="text-xs text-zinc-400">Hisse Analiz</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/" label={t(lang, "nav_home")} />
          <NavLink href="/market" label={t(lang, "nav_market")} />
          <NavLink href="/analizler" label={t(lang, "nav_analysis")} />
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <Link href="/market" className="hidden md:inline-flex"><Button variant="outline">{t(lang, "cta_market")}</Button></Link>
        </div>
      </div>
    </header>
  );
}
