
exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',

  // Specs here are the cucumber feature files
  specs: [
    './features/*.feature'
  ],

  // Use a custom framework adapter and set its relative path
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // cucumber command line options
  cucumberOpts: {
    require: ['./steps/**/*.ts'],
    tags: [],
    strict: true,
    dryRun: false,
    compiler: []
  },

  // Enable TypeScript for the tests
  onPrepare() {
    require('ts-node').register({
      project: './e2e/tsconfig.json'
    });
   }
};