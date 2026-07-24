const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function AppHeader() {
  return (
    <header className="flex p-4 pl-8 mb-8 border-b-[var(--background)] border-b-2 bg-[var(--background)]">
      <a href="/" className="flex items-center">
        <img
          src="/assets/logo/fox.svg"
          alt="Logo"
          className="h-16 mr-4 stroke-[var(--foreground)] stroke-cap-round stroke-64"
        />
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
