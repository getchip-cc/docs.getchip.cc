module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(require('./lib/plugins/sass.js'));

  eleventyConfig
    .addPassthroughCopy('./src/fonts')
    .addPassthroughCopy('./src/icon-16.png')
    .addPassthroughCopy('./src/images');

  return {
    dir: {
      input: './src',
      output: './public'
    }
  };
};
