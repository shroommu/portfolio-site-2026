import { Metadata } from "next";

import PreviewCard from "@/components/PreviewCard";
import { parsePostDate } from "@/lib/formatDate";
import { getMdxPreviews } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read about my latest projects and thoughts",
};

export default async function Page() {
  const postPreviews = await getMdxPreviews("blog");

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-8">
      <h1 className="col-span-full text-step-4 md:text-step-6 mb-4 text-center">
        Blog Posts
      </h1>
      {postPreviews
        .sort(
          (a, b) =>
            parsePostDate(b.date).getTime() - parsePostDate(a.date).getTime(),
        )
        .map((preview) => (
          <PreviewCard
            key={preview.slug}
            postPreview={preview}
            postType="blog"
          />
        ))}
    </div>
  );
}
