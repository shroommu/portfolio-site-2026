import fs from "fs";
import path from "path";

const MDX_EXTENSION = ".mdx";

const contentDirectories = {
  blog: "_posts",
  projects: "_projects",
} as const;

export type PostType = keyof typeof contentDirectories;

export interface PostPreview {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
}

export async function getMdxPreviews(type: PostType): Promise<PostPreview[]> {
  const targetDirectory = path.resolve(process.cwd(), contentDirectories[type]);

  if (!fs.existsSync(targetDirectory)) return [];

  const files = fs.readdirSync(targetDirectory);

  const previews = files.map(async (filepath) => {
    // The static path prefix in each branch is required so the bundler can
    // resolve these dynamic imports.
    const { frontmatter } =
      type === "blog"
        ? await import(`@/_posts/${filepath}`)
        : await import(`@/_projects/${filepath}`);
    return {
      ...frontmatter,
      slug: filepath.replace(MDX_EXTENSION, ""),
    };
  });

  return Promise.all(previews);
}
