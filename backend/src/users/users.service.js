const knex = require('../db/connection');

const list = () => {
    return knex('users')
        .select("*")
}

const read = (user_id) => {
    return knex('users')
        .select('*')
        .where({ user_id })
        .first();
}

const readUsersPosts = (user_id) => {
    return knex('posts as p')
        .join('topics as t', 'p.topic_id', 't.topic_id')
        .select('*')
        .where({ 'p.user_id': user_id })
        .then((response) => {
            if (response.length) {
                return response;
            }
        })
}

const create = (newUser) => {
    return knex('users')
        .insert(newUser, '*')
        .then(rows => rows[0]);
}

const update = (user_id, updatedUser) => {
    return knex('users')
        .where({ user_id })
        .update(updatedUser, '*')
        .then(rows => rows[0]);
}

const readUsersComments = (user_id) => {
    return knex('comments as c')
        .join('posts as p', 'c.post_id', 'p.post_id')
        .select('*')
        .where({ 'c.user_id': user_id })
        .then(response => {
            if (response.length) {
                return response;
            };
        });
} 

module.exports = {
    list,
    read,
    readUsersPosts,
    readUsersComments,
    create,
    update,
}