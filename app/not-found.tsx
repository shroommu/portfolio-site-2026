import Link from "next/link";

import FoxLogo from "@/components/FoxLogo";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 md:p-8">
      <FoxLogo gradientId="logoGradient-not-found" className="w-24 md:w-32" />
      <h1 className="text-step-5 md:text-step-6 text-center">404</h1>
      <p className="text-center max-w-prose">
        This page wandered off the trail and into the woods. Let&apos;s get you
        back to familiar ground.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-[var(--theme-color-accent)] text-[var(--on-accent)] rounded-md hover:bg-[var(--theme-color-accent-light)]"
      >
        Back to Home
      </Link>
    </div>
  );
}
