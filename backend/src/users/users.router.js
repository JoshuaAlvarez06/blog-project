const router = require('express').Router();
const controller = require('./users.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');
router
    .route('/create-user')
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route('/')
    .get(controller.list)
    .all(methodNotAllowed);

router
    .route('/:userId')
    .get(controller.read)
    .put(controller.update)
    .all(methodNotAllowed);

router
    .route('/:userId/posts')
    .get(controller.read)
    .all(methodNotAllowed);

router
    .route('/:userId/comments')
    .get(controller.read)
    .all(methodNotAllowed);



module.exports = router;