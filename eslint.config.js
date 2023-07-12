const globals = require('globals');

const config = require('@jgarber/eslint-config');

module.exports = [
  ...config,
  {
    ignores: ['public/*', 'src/javascripts/lib/*']
  },
  {
    files: ['src/javascripts/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jquery,
        lunr: 'readonly'
      }
    }
  }
];
