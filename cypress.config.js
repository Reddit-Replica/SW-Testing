const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hp3ona',
  "env":{
    CYPRESSBASEURL:"http://frontend_test"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
