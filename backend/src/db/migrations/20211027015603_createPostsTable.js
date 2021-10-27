exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments('post_id').primary();
        table.integer('user_id');
        table
          .foreign('user_id')
          .references('user_id')
          .inTable('users')
          .onDelete('cascade');
        table.integer('topic_id');
        table
          .foreign('topic_id')
          .references('topic_id')
          .inTable('topics')
          .onDelete('cascade');
        table.string('post_title');
        table.text('post_content');
        table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('posts');
  };
  