const router = require('express').Router();
const controller = require('./topics.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

router
    .route('/')
    .get(controller.list)
    .all(methodNotAllowed);

router
    .route('/:topicId/posts')
    .get(controller.read)
    .all(methodNotAllowed);

module.exports = router;