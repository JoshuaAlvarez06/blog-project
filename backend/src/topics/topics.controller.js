const service = require('./topics.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

const topicExists = async (req, res, next) => {
    const { topicId } = req.params;
    const foundTopic = await service.readTopicPosts(topicId);
    if (foundTopic) {
        res.locals.topic = foundTopic;
        return next();
    }
    next({
        status: 404,
        message: `Topic with ID ${topicId} does not exist.`,
    });
}

const list = async (req, res) => {
    const data = await service.list();
    res.json({ data });
}

const readTopicPosts = (req, res) => {
    res.json({ data: res.locals.topic });
}

module.exports = {
    list,
    read: [asyncErrorBoundary(topicExists), readTopicPosts],
}