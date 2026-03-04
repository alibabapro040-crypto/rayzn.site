"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User } from "lucide-react";
import RevealAnimation from "@/components/reveal-animations";
import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";

type Post = {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    author: string;
    publishedAt: string;
    tags?: string[];
  };
};

export default function AnalizlerPage() {
  const { lang } = useLanguage();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ok = true;
    (async () => {
      try {
        const res = await fetch("/api/posts");
        const data = (await res.json()) as Post[];
        if (!ok) return;
        setPosts(data);
      } finally {
        if (ok) setLoading(false);
      }
    })();
    return () => {
      ok = false;
    };
  }, []);

  const sorted = useMemo(() => {
    return [...posts].sort((a, b) => (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1));
  }, [posts]);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen font-sans">
      <RevealAnimation>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          {t(lang, "analyses_title")}
        </h1>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          {t(lang, "analyses_sub")}
        </p>
      </RevealAnimation>

      {loading ? (
        <div className="text-center text-zinc-400">{t(lang, "no_data")}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((post, index) => (
            <RevealAnimation key={post.slug} delay={index * 0.08}>
              <Link href={`/analizler/${post.slug}`}>
                <Card className="h-full bg-black/40 border-zinc-800 backdrop-blur-sm hover:border-white/20 transition-colors group overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">
                        {post.metadata.tags?.[0] || "Analiz"}
                      </Badge>
                      <span className="text-xs text-zinc-500 flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        {post.metadata.publishedAt}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-white transition-colors">
                      {post.metadata.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      {post.metadata.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <User className="w-4 h-4" />
                      {post.metadata.author}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </RevealAnimation>
          ))}
        </div>
      )}
    </div>
  );
}
