module.exports = function(eleventyConfig) {
  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy('./src/_{headers,redirects}')
    .addPassthroughCopy('./src/*.{ico,txt}')
    .addPassthroughCopy('./src/fonts')
    .addPassthroughCopy('./src/images');

  // Libraries
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown.js'));

  // Plugins
  eleventyConfig.addPlugin(require('./lib/plugins/sass.js'));

  return {
    dir: {
      input: './src'
    }
  };
};
