import nextra from "nextra";
import { createHighlighter } from "shiki";
import { transformerTwoslash } from "@shikijs/twoslash";

const withNextra = nextra({
  defaultShowCopyCode: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: "dracula",
      keepBackground: true,
      defaultLang: "js",
      // Create a custom highlighter that includes twoslash
      onVisitHighlightedLine(node) {
        node.properties.className = ["line"];
      },
      transformers: [
        transformerTwoslash({
          explicitTrigger: true,
        })
      ],
    },
  },
});

export default withNextra({});