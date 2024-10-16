export default {
  extends: "@jgarber/stylelint-config-scss",
  rules: {
    "font-family-no-missing-generic-family-keyword": [
      true,
      {
        ignoreFontFamilies: ["Slate"],
      },
    ],
    "scss/comment-no-loud": null,
  },
};
