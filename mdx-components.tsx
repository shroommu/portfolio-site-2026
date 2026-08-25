import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-[var(--theme-color-link)] underline decoration-[var(--theme-color-link)]"
    >
      {children}
    </a>
  ),
  h1: ({ children }) => (
    <h1 className="text-center text-[32px] md:text-[48px] mb-4 text-[var(--foreground)]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-center text-2xl md:text-[36px] mb-4 text-[var(--foreground)]">
      {children}
    </h2>
  ),
  p: ({ children }) => <p className="mb-4">{children}</p>,
  pre: ({ children }) => (
    <pre className="mb-4 p-2 border border-gray-400 rounded-md bg-[var(--background-light)] whitespace-pre-wrap break-words">
      {children}
    </pre>
  ),
  code: ({ children }) => (
    <code className="bg-[var(--background-light)] p-1 rounded-md">
      {children}
    </code>
  ),
  ul: ({ children }) => <ul className="mb-4 ml-4">{children}</ul>,
  li: ({ children }) => <li className="list-disc ml-4">{children}</li>,
  CenteredLink: ({ children, href }) => (
    <div className="text-center mb-4">
      <a
        href={href}
        className="text-[var(--theme-color-link)] underline decoration-[var(--theme-color-link)]"
      >
        {children}
      </a>
    </div>
  ),
  img: ({ src, alt }) => (
    // Arbitrary MDX images have unknown dimensions, so next/image can't be
    // used here; lazy-load them instead.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="max-w-full mx-auto mb-4"
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
