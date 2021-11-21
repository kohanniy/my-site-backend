const strapi = require("strapi");
strapi().start();

module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
});
