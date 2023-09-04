const config = {
    paths: ['src/features/**/*.feature'],
    require: ['src/glue/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'summary',
      'progress-bar',
    ],
    formatOptions: { snippetInterface: 'async-await' },
  };

module.exports = {
   default: config
 }