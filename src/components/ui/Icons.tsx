import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; color?: string };

function base({ size = 18, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    ...rest,
  } as const;
}

export function CheckIcon({ color = "var(--green)", strokeWidth = 2.4, ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 6 9 17l-5-5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Slightly different tick used in plan cards ("Ready"). */
export function TickIcon({ color = "var(--green)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CrossIcon({ color = "var(--red)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" stroke={color} strokeWidth={2.2} strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ color = "currentColor", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Chef hat — used for restaurant / eat-out slots. */
export function ChefHatIcon({ color = "var(--green)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M6 13.5A3.5 3.5 0 0 1 5.2 6.6 3.8 3.8 0 0 1 12 4.4a3.8 3.8 0 0 1 6.8 2.2A3.5 3.5 0 0 1 18 13.5H6Z"
        stroke={color}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path d="M7 13.5V19h10v-5.5" stroke={color} strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M7 16.3h10" stroke={color} strokeWidth={1.4} />
    </svg>
  );
}

/** Shopping bag — delivery / shopping. */
export function BagIcon({ color = "var(--green)", strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 8h12l-1 12H7L6 8Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

/** Small bag outline without handles — calendar "out" day. */
export function BagOutlineIcon({ color = "var(--orange)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 8h12l-1 12H7L6 8Z" stroke={color} strokeWidth={2} strokeLinejoin="round" />
    </svg>
  );
}

/** Box — meal kits. */
export function BoxIcon({ color = "var(--green)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="8" width="16" height="12" rx="2" stroke={color} strokeWidth={1.8} />
      <path d="M4 8l2-4h12l2 4M12 8v12" stroke={color} strokeWidth={1.8} strokeLinejoin="round" />
    </svg>
  );
}

export function MicIcon({ color = "#fff", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="9" y="3" width="6" height="11" rx="3" fill={color} />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

export function MailIcon({ color = "var(--green)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke={color} strokeWidth={1.8} />
      <path d="m4.5 7 7.5 6 7.5-6" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ color = "currentColor", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M5 12h14" stroke={color} strokeWidth={2.2} strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ color = "currentColor", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ color = "currentColor", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}
