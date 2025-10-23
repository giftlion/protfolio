import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: "dracula",
      keepBackground: true,
      defaultLang: "js",
    },
  },
});

export default withNextra({
});
