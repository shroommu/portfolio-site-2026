import fs from "fs";
import path from "path";

import { Metadata } from "next";

import { formatDate, toISODate } from "@/lib/formatDate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const { frontmatter } = await import(`@/_projects/${slug}.mdx`);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

const contentDir = path.join(process.cwd(), "_projects");

export async function generateStaticParams() {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir);

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, frontmatter } = await import(
    `@/_projects/${slug}.mdx`
  );

  return (
    <div className="flex flex-col p-4 md:p-8">
      <h1 className="text-center text-step-4 md:text-step-6 text-[var(--foreground)]">
        {frontmatter.title}
      </h1>
      <p className="text-center mb-4">
        <time dateTime={toISODate(frontmatter.date)}>
          {formatDate(frontmatter.date)}
        </time>
      </p>
      <div className="max-w-prose mx-auto w-full">
        <Post />
      </div>
    </div>
  );
}

export const dynamicParams = false;
