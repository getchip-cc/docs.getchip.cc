module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(require('./lib/plugins/sass.js'));

  return {
    dir: {
      input: './src',
      output: './public'
    }
  };
};
