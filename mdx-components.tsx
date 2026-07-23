import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-decoration-underline text-theme-color-secondary"
    >
      {children}
    </a>
  ),
  h1: ({ children }) => (
    <h1 className="text-center text-[32px] md:text-[48px] mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-center text-2xl md:text-[36px] mb-4">{children}</h2>
  ),
  p: ({ children }) => <p className="mb-4">{children}</p>,
  ul: ({ children }) => <ul className="mb-4 ml-4">{children}</ul>,
  li: ({ children }) => <li className="list-disc ml-4">{children}</li>,
  CenteredLink: ({ children, href }) => (
    <div className="text-center mb-4">
      <a
        href={href}
        className="text-[var(--theme-color-secondary)] underline decoration-[var(--theme-color-secondary)]"
      >
        {children}
      </a>
    </div>
  ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="max-w-full mx-auto mb-4" />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
