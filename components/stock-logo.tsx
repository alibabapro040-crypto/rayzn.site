"use client";

import React from "react";

export default function StockLogo({ symbol, size = 40 }: { symbol: string; size?: number }) {
  const srcSvg = `/stocks/${symbol}.svg`;
  const srcPng = `/stocks/${symbol}.png`;

  return (
    <div
      className="relative grid place-items-center rounded-xl border border-border bg-black/20 overflow-hidden"
      style={{ width: size, height: size }}
      title={symbol}
    >
      <img
        src={srcSvg}
        alt={symbol}
        width={size}
        height={size}
        style={{ width: size, height: size }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = srcPng;
        }}
      />
      <span className="absolute inset-0 grid place-items-center text-[10px] font-semibold text-white/70 pointer-events-none select-none">
        {symbol}
      </span>
    </div>
  );
}
