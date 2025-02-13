const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.baseUrl = "https://www.saucedemo.com/";
      config.env.firstname = "FirstName"
      config.env.lastname = "Jose"
      config.env.zipcode = "254"
      config.env.username = "standard_user"
      config.env.password = "secret_sauce"
      config.env.incorrectpassword = "secret_sauco"
      return config;
    },
  },
});