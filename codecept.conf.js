exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://demoqa.com',
      browser: 'chrome',
      restart: true,
      host: 'localhost',
      port: 4444,
      protocol: 'http',
      path: '/wd/hub',
      desiredCapabilities: {
        browserName: 'chrome',
        platformName: 'linux'
      },
      windowSize: 'maximize',
      timeouts: {
        session: 300000
      },
      smartWait: 10000,
      waitForTimeout: 60000
    }
  },
  include: {
    I: './steps_file'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/textBox.js',
      './step_definitions/checkBox.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.ts',
  name: 'codecept_JS'
}