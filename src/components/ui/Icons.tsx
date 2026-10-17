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

/** Two people — family profile. */
export function UsersIcon({ color = "var(--green)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8.5" r="3.2" stroke={color} strokeWidth={1.8} />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <path d="M15.5 5.6a3 3 0 0 1 0 5.8M17.5 14.2a5.2 5.2 0 0 1 3 5.3" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

/** Open book — family menu / recipes. */
export function BookIcon({ color = "var(--green)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M12 6.5C10.3 5.3 7.8 4.8 4 5v13c3.8-.2 6.3.3 8 1.5 1.7-1.2 4.2-1.7 8-1.5V5c-3.8-.2-6.3.3-8 1.5Z"
        stroke={color}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <path d="M12 6.5v13" stroke={color} strokeWidth={1.8} />
    </svg>
  );
}

/** Calendar — meal plan. */
export function CalendarIcon({ color = "var(--green)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2.5" stroke={color} strokeWidth={1.8} />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <path d="M8 14h2M14 14h2M8 17h2" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

/** Wallet — spending & budget. */
export function WalletIcon({ color = "var(--green)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M17 7V5.5A1.5 1.5 0 0 0 15.5 4H6a2 2 0 0 0-2 2" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <rect x="4" y="7" width="16" height="13" rx="2.5" stroke={color} strokeWidth={1.8} />
      <path d="M20 11.5h-3.5a2 2 0 0 0 0 4H20" stroke={color} strokeWidth={1.8} strokeLinejoin="round" />
    </svg>
  );
}

/** Sparkle — AI. */
export function SparkIcon({ color = "var(--green)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M12 3.5c.6 4.3 2.2 5.9 6.5 6.5-4.3.6-5.9 2.2-6.5 6.5-.6-4.3-2.2-5.9-6.5-6.5 4.3-.6 5.9-2.2 6.5-6.5Z"
        stroke={color}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <path d="M18.5 16v4M16.5 18h4" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

/** Supermarket cart — shopping list. */
export function CartIcon({ color = "var(--green)", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M3 4h2.2l2.3 10.6a1.5 1.5 0 0 0 1.5 1.2h8.2a1.5 1.5 0 0 0 1.4-1.1L20.5 8H6.2"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="19.5" r="1.4" fill={color} />
      <circle cx="17" cy="19.5" r="1.4" fill={color} />
    </svg>
  );
}

export function ArrowDownIcon({ color = "currentColor", ...props }: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M6 13l6 6 6-6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
