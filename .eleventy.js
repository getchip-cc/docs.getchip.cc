module.exports = eleventy => {
  eleventy.addPassthroughCopy('./src/fonts');
  eleventy.addPassthroughCopy('./src/images');
  eleventy.addPassthroughCopy('./src/javascripts');
  eleventy.addPassthroughCopy('./src/public');
  eleventy.addPassthroughCopy('./src/stylesheets');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    },
    templateFormats: ['html']
  }
};
