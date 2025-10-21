const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/results-[hash].xml"
    },
    cypressMochawesomeReporterReporterOptions: {
      clarts: true,
      reportPageTitle: 'Relatório de Testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    },
    
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
