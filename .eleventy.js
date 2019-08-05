module.exports = eleventyConfig => {
  const inputDir = './src';
  const outputDir = './public';

  ['fonts', 'images', 'javascripts', 'public', 'stylesheets'].forEach(dir => {
    eleventyConfig.addPassthroughCopy({ [`${inputDir}/${dir}`]: true });
  });

  return {
    dir: {
      input: inputDir,
      layouts: '_layouts',
      output: outputDir
    },
    templateFormats: ['html']
  }
};
