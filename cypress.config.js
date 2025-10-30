const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.js',
    retries: { runMode: 2, openMode: 0 },
    setupNodeEvents(on, config) {
      return config
    },
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true
    }
  },
  screenshotsFolder: 'cypress/artifacts/screenshots',
  videosFolder: 'cypress/artifacts/videos'
})
