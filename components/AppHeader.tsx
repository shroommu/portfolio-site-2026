"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import FoxLogo from "@/components/FoxLogo";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { navLinks, socialLinks } from "@/lib/nav";

export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const panel = menuRef.current;
    const trigger = openButtonRef.current;
    if (!panel) return;

    const getFocusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );

    // Move focus into the menu when it opens
    getFocusable()[0]?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      // Trap focus within the menu while it is open
      const items = getFocusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      // Restore focus to the trigger when the menu closes
      trigger?.focus();
    };
  }, [isMenuOpen]);

  return (
    <header className="relative flex justify-between p-4 mb-8 border-b-2 border-black/10 dark:border-white/10 shadow-sm bg-[var(--background)] items-center md:gap-4">
      <Link
        href="/"
        className="flex items-center"
        aria-label="Alex Kruckenberg — home"
      >
        <FoxLogo gradientId="logoGradient-header" className="w-16" />
      </Link>
      <Link href="/" className="flex items-center">
        <p className="text-step-4 leading-[32px] md:leading-auto md:text-step-5 text-[var(--foreground)] text-center hover:underline hover:text-decoration-[var(--foreground)] font-[var(--font-shippori)]">
          Alex Kruckenberg
        </p>
      </Link>
      <div className="flex md:hidden w-16 justify-center">
        <button
          ref={openButtonRef}
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            viewBox="0 0 101 80"
            aria-hidden="true"
            className="w-6 h-6 fill-[var(--foreground)]"
          >
            <rect width="100" height="10" rx="5"></rect>
            <rect y="30" width="100" height="10" rx="5"></rect>
            <rect y="60" width="100" height="10" rx="5"></rect>
          </svg>
        </button>
      </div>
      <nav className="hidden md:flex items-center" aria-label="Site">
        <ul className="flex justify-center space-x-4">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="flex items-center">
              <Link
                href={href}
                className="flex items-center text-step-1 md:text-step-3 text-[var(--foreground)] hover:underline hover:text-decoration-[var(--foreground)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:flex ml-auto items-center gap-4">
        <a
          href={socialLinks[0].href}
          aria-label={socialLinks[0].label}
          className="flex items-center"
        >
          <GitHubIcon className="w-10 h-10 fill-[var(--foreground)]" />
        </a>
        <a
          href={socialLinks[1].href}
          aria-label={socialLinks[1].label}
          className="flex items-center"
        >
          <LinkedInIcon
            className="w-10 h-10 fill-[var(--foreground)]"
            rectFill="var(--foreground)"
            pathFill="var(--background)"
          />
        </a>
      </div>
      <div
        id="mobile-menu"
        inert={!isMenuOpen}
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-50 md:hidden overflow-hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute inset-0 flex flex-col px-4 py-6 bg-[var(--theme-color-accent)] transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="Close menu"
            className="ml-auto w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-10 h-10 fill-[var(--on-accent)]"
            >
              <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
            </svg>
          </button>
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-[var(--on-accent)] text-step-5 font-[var(--font-shippori)]"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[var(--on-accent)] text-step-5 font-[var(--font-shippori)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex mt-auto justify-center gap-4">
            <a
              href={socialLinks[0].href}
              aria-label={socialLinks[0].label}
              className="flex items-center"
            >
              <GitHubIcon className="w-10 h-10 fill-[var(--on-accent)]" />
            </a>
            <a
              href={socialLinks[1].href}
              aria-label={socialLinks[1].label}
              className="flex items-center"
            >
              <LinkedInIcon
                className="w-10 h-10"
                rectFill="var(--on-accent)"
                pathFill="var(--theme-color-accent)"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
