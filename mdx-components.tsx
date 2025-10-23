import React from "react";
import { useMDXComponents as getBlogMDXComponents } from "nextra-theme-blog";
import { Image } from "nextra/components";

const blogComponents = getBlogMDXComponents({
  wrapper: ({ children, metadata }) => (
    
    <div className="text-white!">
      <div className="mb-32">
        <h2 className="text-center font-normal text-white!">
          {new Date(metadata.timestamp!).toLocaleDateString("en", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </h2>
        <h1 className="text-center text-5xl! text-white!">{metadata.title}</h1>
      </div>
      <div>{children}</div>
    </div>
  ),
  h1: ({ children }) => (
    <h1
      className="text-center! text-white"
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        backgroundImage: "linear-gradient(90deg,#7928CA,#FF0080)",
      }}
    >
      {children}
    </h1>
  ),
  DateFormatter: ({ date }) =>
    `published at ${date.toLocaleDateString("en", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })}`,
  h2: ({ children }) => (
    <h2
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        backgroundImage: "linear-gradient(90deg,#00DFD8,#007CF0)",
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="text-left! text-white"
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        backgroundImage: "linear-gradient(90deg,#7928CA,#FF0080)",
      }}
    >
      {children}
    </h3>
  ),
  a: ({ children, href }) => (
    <a
      href={typeof href === 'string' ? href : href?.toString()}
      className="text-amber-500! no-underline! transition-colors hover:text-blue-600!"
    >
      {children}
    </a>
  ),
  img: (props) => <Image {...props} />,
  p: ({ children }) => <p className="text-xl">{children}</p>,
});

export function useMDXComponents(components) {
  return {
    ...blogComponents,
    ...components,
  };
}
