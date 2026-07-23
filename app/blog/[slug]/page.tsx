import fs from "fs";
import path from "path";

import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;

  // Dynamically import the MDX file
  const { frontmatter } = await import(`@/_posts/${slug}.mdx`);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

const contentDir = path.join(process.cwd(), "_posts");

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
  const { default: Post, frontmatter } = await import(`@/_posts/${slug}.mdx`);

  return (
    <div className="flex flex-col p-6 md:p-16">
      <h1 className="text-center text-[32px] md:text-[48px]">
        {frontmatter.title}
      </h1>
      <p className="text-center mb-4">{frontmatter.date}</p>
      <Post />
    </div>
  );
}

export const dynamicParams = false;
