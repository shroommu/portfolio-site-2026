const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function AppHeader() {
  return (
    <header className="flex p-4 pl-8 mb-8 border-b-[var(--background)] border-b-2 bg-[var(--background)]">
      <a href="/" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-0.5 -0.5 13 13"
          className="h-16 stroke-[var(--foreground)] stroke-[0.25px] [stroke-linecap:round] mr-4"
        >
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--theme-color-primary)" />
              <stop offset="50%" stopColor="var(--theme-color-secondary)" />
              <stop offset="100%" stopColor="var(--theme-color-tertiary)" />
            </linearGradient>
          </defs>
          <path
            d="M 1 0 L 2 4 L 0 8 L 4.5 10 L 5 11.5 L 6 12 L 7 11.5 L 7.5 10 L 12 8 L 10 4 L 11 0 L 7 3 L 5 3 Z L 3 4 M 6 11 L 6 11 M 6 11 L 6 11 M 12 8 L 10 7 M 0 8 L 2 7 M 2 7 L 2 7 L 3 4 M 10 7 L 9 4 M 6 11 L 6 4 M 5 7 L 3.5 6 L 4 7 L 5 7 M 7 7 L 8.5 6 L 7 7 M 11 0 L 9 4 L 10 4 M 2 7 L 4.5 10 M 10 7 L 7.5 10 M 3.5 6 L 3 4 M 8.5 6 L 9 4 M 5 7 L 5.5 11.25 M 7 7 L 6.5 11.25 M 2 7 L 3.5 6 M 10 7 L 8.5 6 L 6 5 L 3.5 6 M 3 4 L 5 3 M 9 4 L 7 3 M 6 4 L 5 3 M 6 4 L 7 3 M 5 7 L 6 6 L 6 6 M 7 7 L 6 6 M 3 4 L 2 4 M 5 11.5 L 6 11 M 7 11.5 L 6 11 M 7 7 L 8 7 L 8.5 6"
            fill="url(#logoGradient)"
          />
        </svg>
      </a>
      <a href="/" className="flex items-center">
        <h1 className="text-[24px] md:text-[36px] text-[var(--foreground)] mr-8 hover:underline hover:text-decoration-[var(--foreground)]">
          Alex Kruckenberg
        </h1>
      </a>
      <nav className="flex items-center">
        <ul className="flex justify-center space-x-4">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="flex items-center">
              <a href={href} className="flex items-center">
                <h2 className="flex items-center text-[18px] md:text-[24px] text-[var(--foreground)] hover:underline hover:text-decoration-[var(--foreground)]">
                  {label}
                </h2>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
