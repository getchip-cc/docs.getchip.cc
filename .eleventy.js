module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(require('./lib/plugins/sass.js'));

  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown.js'));

  eleventyConfig
    .addPassthroughCopy('./src/fonts')
    .addPassthroughCopy('./src/icon-16.png')
    .addPassthroughCopy('./src/images');

  return {
    dir: {
      input: './src',
      layouts: './_layouts',
      output: './public'
    }
  };
};
