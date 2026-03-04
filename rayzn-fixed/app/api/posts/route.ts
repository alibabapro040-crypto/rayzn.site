import { getBlogPosts } from "@/lib/mdx";

export const runtime = "nodejs";

export async function GET() {
  const posts = getBlogPosts();
  return Response.json(posts, {
    headers: {
      "Cache-Control": "public, max-age=60",
    },
  });
}
