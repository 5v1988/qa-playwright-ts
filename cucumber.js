module.exports = {
  default: {
    paths: ['src/features/**/*.feature'],
    require: ['src/glue/**/*.ts'],
    requireModule: ['ts-node/register'],
    formatOptions: { snippetInterface: 'async-await' },
    format: [
      'summary',
      'html:report/cucumber-report.html',
    ],
    dryRun: false,
    tags: '@SignIn',
    worldParameters: {

    }
  }
}