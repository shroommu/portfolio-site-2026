import fs from "fs";
import path from "path";

import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
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
    <div>
      <h1 style={{ color: "red", fontSize: "48px", textAlign: "center" }}>
        {frontmatter.title}
      </h1>
      <h2
        style={{
          color: "blue",
          fontSize: "16px",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        {frontmatter.date}
      </h2>
      <Post />
    </div>
  );
}

export const dynamicParams = false;
