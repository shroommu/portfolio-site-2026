import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  a: ({ children, href }) => (
    <a href={href} style={{ textDecoration: "underline" }}>
      {children}
    </a>
  ),
  h1: ({ children }) => (
    <h1 style={{ fontSize: "48px", textAlign: "center" }}>{children}</h1>
  ),
  h2: ({ children }) => (
    <h2
      style={{
        fontSize: "36px",
        textAlign: "center",
        marginBottom: "16px",
      }}
    >
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p style={{ fontSize: "16px", marginBottom: "16px" }}>{children}</p>
  ),
  ul: ({ children }) => (
    <ul style={{ fontSize: "16px", margin: "0 0 16px 16px" }}>{children}</ul>
  ),
  li: ({ children }) => (
    <li
      style={{
        color: "inherit",
        fontSize: "16px",
        listStyleType: "disc",
        marginLeft: "16px",
      }}
    >
      {children}
    </li>
  ),
  CenteredLink: ({ children, href }) => (
    <div style={{ textAlign: "center", marginBottom: "16px" }}>
      <a
        href={href}
        style={{
          color: "blue",
          textDecoration: "underline",
        }}
      >
        {children}
      </a>
    </div>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      style={{ maxWidth: "100%", margin: "0 auto 16px auto" }}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
