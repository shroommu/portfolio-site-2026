export default function FoxLogo({
  gradientId,
  className = "",
}: {
  /** Used as the SVG gradient id — must be unique per page. */
  gradientId: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.5 -0.5 13 13"
      aria-hidden="true"
      className={`stroke-[var(--foreground)] stroke-[0.25px] [stroke-linecap:round] ${className}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--theme-color-primary)" />
          <stop offset="50%" stopColor="var(--theme-color-secondary)" />
          <stop offset="100%" stopColor="var(--theme-color-tertiary)" />
        </linearGradient>
      </defs>
      <path
        d="M 1 0 L 2 4 L 0 8 L 4.5 10 L 5 11.5 L 6 12 L 7 11.5 L 7.5 10 L 12 8 L 10 4 L 11 0 L 7 3 L 5 3 Z L 3 4 M 6 11 L 6 11 M 6 11 L 6 11 M 12 8 L 10 7 M 0 8 L 2 7 M 2 7 L 2 7 L 3 4 M 10 7 L 9 4 M 6 11 L 6 4 M 5 7 L 3.5 6 L 4 7 L 5 7 M 7 7 L 8.5 6 L 7 7 M 11 0 L 9 4 L 10 4 M 2 7 L 4.5 10 M 10 7 L 7.5 10 M 3.5 6 L 3 4 M 8.5 6 L 9 4 M 5 7 L 5.5 11.25 M 7 7 L 6.5 11.25 M 2 7 L 3.5 6 M 10 7 L 8.5 6 L 6 5 L 3.5 6 M 3 4 L 5 3 M 9 4 L 7 3 M 6 4 L 5 3 M 6 4 L 7 3 M 5 7 L 6 6 L 6 6 M 7 7 L 6 6 M 3 4 L 2 4 M 5 11.5 L 6 11 M 7 11.5 L 6 11 M 7 7 L 8 7 L 8.5 6"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}
