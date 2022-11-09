const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hp3ona',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
