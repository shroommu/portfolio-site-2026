import Image from "next/image";
import Link from "next/link";

import { formatDate, toISODate } from "@/lib/formatDate";
import type { PostPreview } from "@/lib/mdx";

export default function PreviewCard({
  postPreview,
  postType,
}: {
  postPreview: PostPreview;
  postType: "blog" | "projects";
}) {
  return (
    <div className="relative h-full p-4 overflow-hidden shadow-xl hover:shadow-2xl rounded-md group bg-[var(--background-light)]">
      <div className="flex flex-col h-full gap-2">
        <div className="relative h-[100px] md:h-[150px] w-full">
          <Image
            src={postPreview.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-contain"
          />
        </div>
        <h2 className="text-step-1 md:text-step-3 text-center">
          <Link
            href={`/${postType}/${postPreview.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {postPreview.title}
          </Link>
        </h2>
        <p className="text-caption text-gray-500 text-center">
          <time dateTime={toISODate(postPreview.date)}>
            {formatDate(postPreview.date)}
          </time>
        </p>
        <p className="text-center line-clamp-3">{postPreview.excerpt}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {postPreview.tags.map((tag) => (
            <span
              key={tag}
              className="text-caption px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10"
            >
              {`#${tag}`}
            </span>
          ))}
        </div>
        <div className="flex w-full mt-auto text-[var(--theme-color-link)] group-hover:underline">
          <p className="ml-auto">Read More →</p>
        </div>
      </div>
    </div>
  );
}
