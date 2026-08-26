import Link from "next/link";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { navLinks, socialLinks } from "@/lib/nav";

export default function AppFooter() {
  return (
    <footer className="mt-auto p-4 bg-[var(--background)] border-t border-black/10 dark:border-white/10">
      <nav aria-label="Footer" className="flex justify-center gap-4 mb-2">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-[var(--theme-color-link)] hover:underline"
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex justify-center gap-4 mb-2">
        <a
          href={socialLinks[0].href}
          aria-label={socialLinks[0].label}
          className="flex items-center"
        >
          <GitHubIcon className="w-6 h-6 fill-[var(--foreground)]" />
        </a>
        <a
          href={socialLinks[1].href}
          aria-label={socialLinks[1].label}
          className="flex items-center"
        >
          <LinkedInIcon
            className="w-6 h-6"
            rectFill="var(--foreground)"
            pathFill="var(--background)"
          />
        </a>
      </div>
      <p className="text-center text-caption">
        © {new Date().getFullYear()} Alex Kruckenberg
      </p>
    </footer>
  );
}
