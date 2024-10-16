import eleventyPluginMarkdown from "@jgarber/eleventy-plugin-markdown";
import eleventyPluginSass from "@jgarber/eleventy-plugin-sass";

import markdownItAnchor from "markdown-it-anchor";

export default function(eleventyConfig) {
  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy("./src/_{headers,redirects}")
    .addPassthroughCopy("./src/*.{ico,txt}")
    .addPassthroughCopy("./src/fonts")
    .addPassthroughCopy("./src/images");

  // Plugins
  eleventyConfig.addPlugin(eleventyPluginMarkdown, {
    plugins: [
      [markdownItAnchor, { tabIndex: false }],
    ],
  });

  eleventyConfig.addPlugin(eleventyPluginSass);
}

export const config = {
  dir: {
    input: "./src",
  },
};
