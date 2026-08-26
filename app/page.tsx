import Image from "next/image";
import Link from "next/link";

import FoxLogo from "@/components/FoxLogo";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center p-4 md:p-8">
      <Image
        src="/assets/images/pfp-circle.png"
        alt="Portrait of Alex Kruckenberg"
        width={192}
        height={192}
        priority
        className="w-48 h-48 rounded-full"
      />
      <div className="flex items-center justify-center gap-3 md:gap-5">
        <FoxLogo
          gradientId="logoGradient-hero"
          className="w-14 md:w-20 shrink-0"
        />
        <h1 className="text-step-5 md:text-step-6 text-center">
          Hi, I&apos;m Alex!
        </h1>
      </div>
      <h2 className="text-step-2 text-center" data-testid="greeting-subheader">
        Software Developer, Data Analyst, Creative
      </h2>
      <p className="text-center max-w-prose">
        I&apos;m a curious person who loves to create and learn. You&apos;ll
        find me anywhere that code and data interact, plus a few other places
        besides. Have a look around to see what I&apos;ve been working on!
      </p>
      <p className="text-center max-w-prose">
        I&apos;m located in the Salt Lake Metropolitan area, where I live with a
        pet rabbit who rules my life. When I&apos;m not coding, I like to play
        video games and make art (especially cross stitch).
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        <Link
          href="/projects"
          className="px-4 py-2 bg-[var(--theme-color-accent)] text-[var(--on-accent)] rounded-md hover:bg-[var(--theme-color-accent-light)]"
        >
          View My Projects
        </Link>
        <Link
          href="/blog"
          className="px-4 py-2 border-2 border-[var(--theme-color-link)] text-[var(--theme-color-link)] rounded-md hover:underline"
        >
          Read the Blog
        </Link>
      </div>
      <p className="text-center">Thanks for visiting my site!</p>
    </div>
  );
}
