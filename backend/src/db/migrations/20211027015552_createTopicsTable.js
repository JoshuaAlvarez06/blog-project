exports.up = function(knex) {
  return knex.schema.createTable('topics', (table) => {
      table.increments('topic_id').primary();
      table.string('topic_name');
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('topics');
};
