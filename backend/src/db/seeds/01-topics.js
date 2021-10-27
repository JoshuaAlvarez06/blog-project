const topics = require("../fixtures/topics");

exports.seed = (knex) => {
  return knex
    .raw("TRUNCATE TABLE topics RESTART IDENTITY CASCADE")
    .then(() => knex("topics").insert(topics));
};