module.exports = (async () => {
  const { default: config } = await import("@jgarber/eslint-config");

  return [
    { ignores: ["_site", "src/javascripts/lib"] },
    ...config,
    {
      files: ["src/javascripts/app/*.js"],
      languageOptions: {
        globals: {
          $: "readonly",
          document: "readonly",
          lunr: "readonly",
          window: "readonly",
        },
      },
    },
  ];
})();
