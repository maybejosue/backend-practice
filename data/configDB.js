const knex = require("knex");

const configToDB = require("../knexfile.js");

const environment = process.env.DB_ENV || "development";

module.exports = knex(configToDB[environment]);
