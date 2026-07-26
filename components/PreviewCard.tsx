export default function PreviewCard({
  postPreview,
  postType,
}: {
  postPreview: Record<string, any>;
  postType: string;
}) {
  return (
    <div className="p-4 overflow-hidden shadow-xl hover:shadow-2xl rounded-md group bg-[var(--background-light)]">
      <a href={`/${postType}/${postPreview?.slug}`}>
        <div className="flex flex-col h-full justify-center gap-2">
          <img
            src={postPreview?.image}
            alt={postPreview?.title || "Blog post preview image"}
            className="h-[100px] md:h-[150px] w-auto object-contain"
          />
          <div className="h-full flex flex-col justify-between gap-2">
            <h2 className="text-[18px] md:text-[24px] text-center">
              {postPreview?.title}
            </h2>
            <p className="text-[14px] text-gray-500 text-center">
              {postPreview?.date}
            </p>
            <p className="text-center">{postPreview?.excerpt}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {postPreview?.tags.map((tag: string) => {
                return <span key={tag}>{`#${tag}`}</span>;
              })}
            </div>
            <div className="flex w-full text-[var(--theme-color-accent)] group-hover:underline">
              <p className="ml-auto">Read More →</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
