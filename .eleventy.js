module.exports = eleventyConfig => {
  eleventyConfig
    .addPassthroughCopy('./src/fonts')
    .addPassthroughCopy('./src/images')
    .addPassthroughCopy('./src/javascripts')
    .addPassthroughCopy('./src/public')
    .addPassthroughCopy('./src/stylesheets');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    },
    templateFormats: ['html']
  }
};
