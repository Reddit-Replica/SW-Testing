const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: false,
  video: false,
  projectId: 'hp3ona',
  "env":{
    // CYPRESSBASEURL:"http://frontend_test"
    CYPRESSBASEURL:"http://www.read-it.live"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});