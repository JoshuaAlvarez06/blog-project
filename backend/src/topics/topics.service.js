const knex = require('../db/connection');

const list = () => {
    return knex('topics')
        .select('*');
}

const readTopicPosts = (topic_id) => {
    return knex('topics as t')
        .join('posts as p', 't.topic_id', 'p.topic_id')
        .select('*')
        .where({ 't.topic_id': topic_id })
        .then(response => {
            if (response.length) {
                return response;
            };
        });
}

module.exports = {
    list,
    readTopicPosts,   
}