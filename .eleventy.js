module.exports = eleventyConfig => {
  const inputDir = './src';
  const outputDir = './public';

  ['fonts', 'images', 'javascripts', 'public', 'stylesheets', '_redirects'].forEach(path => {
    eleventyConfig.addPassthroughCopy({ [`${inputDir}/${path}`]: true });
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
