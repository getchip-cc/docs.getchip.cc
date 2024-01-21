module.exports = function(eleventyConfig) {
  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy('./src/_{headers,redirects}')
    .addPassthroughCopy('./src/*.{ico,txt}')
    .addPassthroughCopy('./src/fonts')
    .addPassthroughCopy('./src/images');

  // Plugins
  eleventyConfig.addPlugin(require('@jgarber/eleventy-plugin-markdown'), {
    plugins: [
      [require('markdown-it-anchor'), { tabIndex: false }]
    ]
  });

  eleventyConfig.addPlugin(require('@jgarber/eleventy-plugin-sass'));

  return {
    dir: {
      input: './src'
    }
  };
};
