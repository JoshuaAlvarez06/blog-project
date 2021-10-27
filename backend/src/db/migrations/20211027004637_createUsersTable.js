exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.increments('user_id').primary();
      table.string('user_name').unique().notNullable();
      table.string('first_name')
      table.string('last_name')
      table.string('email').unique();
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
