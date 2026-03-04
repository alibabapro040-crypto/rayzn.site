import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type PostMeta = {
  title: string;
  summary: string;
  author: string;
  publishedAt: string; // YYYY-MM-DD
  tags?: string[];
};

export type Post = {
  slug: string;
  metadata: PostMeta;
};

export type PostWithContent = Post & { content: string };

const CONTENT_DIR = path.join(process.cwd(), "content", "analizler");

function safeReadDir(dir: string) {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

export function getBlogPosts(): Post[] {
  const files = safeReadDir(CONTENT_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  return files.map((filename) => {
    const slug = filename.replace(/\.(md|mdx)$/, "");
    const fullPath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);
    const metadata: PostMeta = {
      title: String(data.title ?? slug),
      summary: String(data.summary ?? ""),
      author: String(data.author ?? "RAYZN"),
      publishedAt: String(data.publishedAt ?? "2026-03-04"),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    };
    return { slug, metadata };
  });
}

export function getBlogPost(slug: string): PostWithContent | null {
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  for (const file of candidates) {
    const fullPath = path.join(CONTENT_DIR, file);
    if (!fs.existsSync(fullPath)) continue;
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    const metadata: PostMeta = {
      title: String(data.title ?? slug),
      summary: String(data.summary ?? ""),
      author: String(data.author ?? "RAYZN"),
      publishedAt: String(data.publishedAt ?? "2026-03-04"),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    };
    return { slug, metadata, content };
  }
  return null;
}
