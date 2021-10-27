const service = require('./posts.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

const postExists = async (req, res, next) => {
    const { postId } = req.params;
    let foundPost;
    let errorStatus;
    //Conditionals to determine which service function is going to be used
    if (req.originalUrl.includes("comments")) {
        foundPost = await service.readPostComments(postId);
        errorStatus = `Post with ID ${postId} does not exist or there are no comments for the post.`
    } else {
        foundPost = await service.read(postId);
        errorStatus = `Post with ID ${postId} does not exist.`
    };
    if (foundPost) {
        res.locals.post = foundPost;
        return next();
    };
    next ({
        status: 404,
        message: errorStatus,
    });
};

const list = async (req, res) => {
    const data = await service.list();
    res.json({ data });
}

const read = (req, res) => {
    res.json({ data: res.locals.post })    
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(postExists), read],
}