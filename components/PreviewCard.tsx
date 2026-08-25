import Image from "next/image";
import Link from "next/link";

import { formatDate, toISODate } from "@/lib/formatDate";

export default function PreviewCard({
  postPreview,
  postType,
}: {
  postPreview: Record<string, any>;
  postType: string;
}) {
  return (
    <div className="p-4 overflow-hidden shadow-xl hover:shadow-2xl rounded-md group bg-[var(--background-light)]">
      <Link href={`/${postType}/${postPreview?.slug}`}>
        <div className="flex flex-col h-full justify-center gap-2">
          <div className="relative h-[100px] md:h-[150px] w-full">
            <Image
              src={postPreview?.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-contain"
            />
          </div>
          <div className="h-full flex flex-col justify-between gap-2">
            <h2 className="text-step-1 md:text-step-3 text-center">
              {postPreview?.title}
            </h2>
            <p className="text-caption text-gray-500 text-center">
              <time dateTime={toISODate(postPreview?.date)}>
                {formatDate(postPreview?.date)}
              </time>
            </p>
            <p className="text-center">{postPreview?.excerpt}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {postPreview?.tags.map((tag: string) => {
                return <span key={tag}>{`#${tag}`}</span>;
              })}
            </div>
            <div className="flex w-full text-[var(--theme-color-link)] group-hover:underline">
              <p className="ml-auto">Read More →</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
