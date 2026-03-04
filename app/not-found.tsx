import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="container py-24 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="text-7xl font-black mb-4">404</div>
      <p className="text-zinc-400 mb-8">Aradığın sayfa bulunamadı.</p>
      <Link href="/">
        <Button>Ana sayfaya dön</Button>
      </Link>
    </main>
  );
}
