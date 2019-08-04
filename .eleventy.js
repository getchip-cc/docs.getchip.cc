module.exports = eleventyConfig => {
  const inputDir = './src';
  const outputDir = './public';

  ['fonts', 'images', 'javascripts', 'public', 'stylesheets'].forEach(dir => {
    eleventyConfig.addPassthroughCopy({ [`${inputDir}/${dir}`]: `/${dir}` });
  });

  eleventyConfig.addPassthroughCopy({ [`${inputDir}/*`] : '/' });

  return {
    dir: {
      input: inputDir,
      output: outputDir
    },
    templateFormats: []
  }
};
