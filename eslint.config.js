const config = require('@jgarber/eslint-config');

module.exports = [
  {
    ignores: ['_site', 'src/javascripts/lib']
  },
  ...config,
  {
    files: ['src/javascripts/app/*.js'],
    languageOptions: {
      globals: {
        $: 'readonly',
        document: 'readonly',
        lunr: 'readonly',
        window: 'readonly'
      }
    }
  }
];
