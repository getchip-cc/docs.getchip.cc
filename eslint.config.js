import config from "@jgarber/eslint-config";

export default [
  { ignores: ["src/javascripts/lib"] },
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
