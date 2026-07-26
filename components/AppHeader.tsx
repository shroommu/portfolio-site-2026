"use client";

import { useState } from "react";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between p-4 mb-8 border-b-[var(--background)] border-b-2 bg-[var(--background)] items-center md:gap-4">
      <a href="/" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-0.5 -0.5 13 13"
          className="w-16 stroke-[var(--foreground)] stroke-[0.25px] [stroke-linecap:round]"
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
        <h1 className="text-[32px] leading-[32px] md:leading-auto md:text-[36px] text-[var(--foreground)] text-center hover:underline hover:text-decoration-[var(--foreground)]">
          Alex Kruckenberg
        </h1>
      </a>
      <div className="flex md:hidden w-16 justify-center">
        <svg
          viewBox="0 0 101 80"
          className="md:hidden w-6 h-6 cursor-pointer fill-[var(--foreground)]"
          onClick={() => setIsMenuOpen(true)}
        >
          <rect width="100" height="10" rx="5"></rect>
          <rect y="30" width="100" height="10" rx="5"></rect>
          <rect y="60" width="100" height="10" rx="5"></rect>
        </svg>
      </div>
      <nav className="hidden md:flex items-center">
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
      <div className="hidden md:flex ml-auto items-center gap-4">
        <a href="https://github.com/shroommu" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 640 640"
            className="w-10 h-10 fill-[var(--foreground)]"
          >
            <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/alex-kruckenberg"
          className="flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 509.64"
            className="w-10 h-10 fill-[var(--foreground)]"
          >
            <rect
              width="512"
              height="509.64"
              rx="115.61"
              ry="115.61"
              fill="var(--foreground)"
            />
            <path
              fill="var(--background)"
              d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
            />
          </svg>
        </a>
      </div>
      <div
        className={`fixed inset-0 z-50 md:hidden overflow-hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 flex flex-col px-4 py-6 bg-[var(--theme-color-accent)] transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="ml-auto w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-10 h-10 fill-[var(--background)]"
            >
              <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
            </svg>
          </button>
          <nav className="flex flex-col gap-4">
            <a href={"/"} onClick={() => setIsMenuOpen(false)}>
              <h1 className="text-[var(--background)] text-[36px]">Home</h1>
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <h1 className="text-[var(--background)] text-[36px]">
                  {link.label}
                </h1>
              </a>
            ))}
          </nav>
          <div className="flex mt-auto justify-center gap-4">
            <a href="https://github.com/shroommu" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 640 640"
                className="w-10 h-10 fill-[var(--background)]"
              >
                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/alex-kruckenberg"
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 509.64"
                className="w-10 h-10"
              >
                <rect
                  width="512"
                  height="509.64"
                  rx="115.61"
                  ry="115.61"
                  fill="var(--background)"
                />
                <path
                  fill="var(--theme-color-accent)"
                  d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
