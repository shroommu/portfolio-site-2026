import fs from "fs";
import path from "path";

import { Metadata } from "next";

import PreviewCard from "@/components/PreviewCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse my project library and read about how each was made",
};

const MDX_EXTENSION = ".mdx";

export async function getMdxPreviews() {
  const targetDirectory = path.resolve(process.cwd(), "_projects");

  let files: string[] = [];
  files = fs.readdirSync(targetDirectory);

  const frontmatter = files.map(async (filepath) => {
    const { default: Post, frontmatter } = await import(
      `@/_projects/${filepath}`
    );
    return {
      ...frontmatter,
      slug: filepath.replace(MDX_EXTENSION, ""),
    };
  });
  return Promise.all(frontmatter);
}

export default async function Page() {
  const postPreviews = await getMdxPreviews();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-8">
      <h1 className="col-span-full text-[32px] md:text-[48px] mb-4 text-center">
        Projects
      </h1>
      {postPreviews
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((preview) => (
          <PreviewCard
            key={preview.slug}
            postPreview={preview}
            postType="project"
          />
        ))}
    </div>
  );
}
