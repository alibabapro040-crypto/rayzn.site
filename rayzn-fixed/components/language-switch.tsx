"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-black/20 p-1">
      <Button
        type="button"
        variant={lang === "tr" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLang("tr")}
        className="rounded-full px-3"
      >
        TR
      </Button>
      <Button
        type="button"
        variant={lang === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLang("en")}
        className="rounded-full px-3"
      >
        EN
      </Button>
    </div>
  );
}
