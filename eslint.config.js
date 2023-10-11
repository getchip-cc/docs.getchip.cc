const config = require('@jgarber/eslint-config');
// const globals = require('globals');

module.exports = [
  ...config,
  {
    ignores: ['_site/*', 'src/javascripts/lib/*']
  },
  {
    files: ['src/javascripts/app/**/*.js'],
    languageOptions: {
      globals: {
        $: 'readonly',
        document: 'readonly',
        lunr: 'readonly',
        window: 'readonly'
      }
    }
  },
  {
    rules: {
      'jsdoc/require-jsdoc': 'off'
    }
  }
];
