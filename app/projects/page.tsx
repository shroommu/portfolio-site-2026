import fs from "fs";
import path from "path";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse my project library and read about how they were made",
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
    <div>
      {postPreviews.map((preview) => (
        <div key={preview.slug}>
          <h2>{preview.title}</h2>
          <p>{preview.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
