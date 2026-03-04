import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "outline" }) {
  const v =
    variant === "outline"
      ? "border border-border bg-transparent text-zinc-200"
      : "bg-white/10 text-zinc-100";
  return <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs", v, className)} {...props} />;
}
