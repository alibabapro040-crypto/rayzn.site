import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export default async function AnalizDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getBlogPost((await params).slug);
  if (!post) return notFound();

  return (
    <main className="container py-14">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline">{post.metadata.tags?.[0] ?? "Analiz"}</Badge>
          <span className="text-sm text-zinc-500">{post.metadata.publishedAt}</span>
          <span className="text-sm text-zinc-600">•</span>
          <span className="text-sm text-zinc-500">{post.metadata.author}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.metadata.title}</h1>
        <p className="text-zinc-400 mb-8">{post.metadata.summary}</p>

        <Card className="p-6">
          <article className="prose prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </Card>
      </div>
    </main>
  );
}
