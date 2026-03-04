import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md";
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const v =
      variant === "ghost"
        ? "bg-transparent hover:bg-white/5"
        : variant === "outline"
        ? "bg-transparent border border-border hover:bg-white/5"
        : "bg-white text-black hover:bg-white/90";
    const s = size === "sm" ? "h-8 px-3 text-sm" : "h-10 px-4 text-sm";
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl transition-colors disabled:opacity-50 disabled:pointer-events-none",
          v,
          s,
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
