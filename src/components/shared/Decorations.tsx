import type { CSSProperties } from "react";

/* Minimalist filled food illustrations used as background decoration. */

type DecoProps = { className?: string; style?: CSSProperties };

const decoBase = { "aria-hidden": true, fill: "none" } as const;

export function Citrus({
  className,
  style,
  size = 128,
  rind = "#F1CE9E",
  flesh = "#FBEEDC",
}: DecoProps & { size?: number; rind?: string; flesh?: string }) {
  return (
    <svg {...decoBase} width={size} height={size} viewBox="0 0 100 100" className={className} style={style}>
      <circle cx="50" cy="50" r="40" fill={rind} />
      <circle cx="50" cy="50" r="31" fill={flesh} />
      <g stroke={rind} strokeWidth="3" strokeLinecap="round">
        <path d="M50 20V50M80 50H50M50 80V50M20 50H50M71 29 50 50M71 71 50 50M29 71 50 50M29 29 50 50" />
      </g>
      <circle cx="50" cy="50" r="5" fill={rind} />
    </svg>
  );
}

export function Herb({
  className,
  style,
  width = 120,
  stem = "#3E8C4E",
  leaf = "#4CA85E",
}: DecoProps & { width?: number; stem?: string; leaf?: string }) {
  return (
    <svg {...decoBase} width={width} height={width * 1.25} viewBox="0 0 80 100" className={className} style={style}>
      <path d="M40 100V20" stroke={stem} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M40 40C40 40 22 36 20 22C34 22 40 32 40 40Z" fill={leaf} />
      <path d="M40 58C40 58 58 54 60 40C46 40 40 50 40 58Z" fill={leaf} />
      <path d="M40 30C40 30 52 27 54 16C42 16 40 24 40 30Z" fill={leaf} />
    </svg>
  );
}

export function ForkKnife({ className, style, color = "#2F9E5B" }: DecoProps & { color?: string }) {
  return (
    <svg {...decoBase} width="82" height="154" viewBox="0 0 60 100" className={className} style={style}>
      <g fill={color}>
        <rect x="7" y="6" width="3.4" height="22" rx="1.7" />
        <rect x="13.8" y="6" width="3.4" height="22" rx="1.7" />
        <rect x="20.6" y="6" width="3.4" height="22" rx="1.7" />
        <path d="M5 26C5 39 12 41 12 41L12 94C12 96.8 13 98 15.5 98C18 98 19 96.8 19 94L19 41C19 41 26 39 26 26Z" />
        <path d="M47 6C48 6 48.5 8 48.5 14L48.5 40L44 40C39 38 38 27 39 20C40 12 44 7 46 6C46.4 5.8 46.6 6 47 6Z" />
        <rect x="43.8" y="38" width="4.6" height="60" rx="2.3" />
      </g>
    </svg>
  );
}

export function Carrot({ className, style }: DecoProps) {
  return (
    <svg {...decoBase} width="96" height="170" viewBox="0 0 60 106" className={className} style={style}>
      <path
        d="M22 44C15 45 12 50 14 56L30 100C31 103 34 103 35 100L46 54C47 48 43 43 36 42C31 41 27 42 22 44Z"
        fill="#E08A3C"
      />
      <g stroke="#FBEEDC" strokeWidth="2.2" strokeLinecap="round">
        <path d="M20 54 27 56M38 52 30 55M22 66 30 68M39 64 32 67M27 80 33 81" />
      </g>
      <g stroke="#3E8C4E" strokeWidth="3" strokeLinecap="round">
        <path d="M30 46 27 26" />
        <path d="M30 44V22" />
        <path d="M33 46 40 28" />
      </g>
      <path d="M27 26C27 26 16 22 15 8C29 11 28 22 27 26Z" fill="#4CA85E" />
      <path d="M30 22C30 22 30 8 30 2C42 8 40 20 30 22Z" fill="#3E8C4E" />
      <path d="M40 28C40 28 50 20 54 8C40 8 39 22 40 28Z" fill="#4CA85E" />
    </svg>
  );
}
