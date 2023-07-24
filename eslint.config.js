const config = require('@jgarber/eslint-config');
const globals = require('globals');

module.exports = [
  ...config,
  {
    ignores: ['_site/*', 'src/javascripts/lib/*']
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
