const service = require('./users.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');
const hasProperties = require('../utils/hasProperties');
const hasRequiredProperties = hasProperties(
    'user_name',
    'first_name',
    'last_name',
    'email')

const userExists = async (req, res, next) => {
    const { userId } = req.params;
    let foundUser;
    //Conditionals to determine which service function is going to be used
    if (req.originalUrl.includes("posts")) {
        foundUser = await service.readUsersPosts(userId);
    } else {
        foundUser = await service.read(userId);
    };
    if (foundUser) {
        res.locals.user = foundUser;
        return next();
    };
    next ({
        status: 404,
        message: `User with ID ${userId} does not exist.`,
    });
};

const VALID_PROPERTIES = [
    'user_name',
    'first_name',
    'last_name',
    'email',
];

const validBodyProperties = (req, res, next) => {
    const { data = {} } = req.body;
    const invalidProperties = Object.keys(data).filter(key => !VALID_PROPERTIES.includes(key));
    if (invalidProperties.length) {
        return next({
            status: 400,
            message: `Invalid field(s): ${invalidProperties.join(' ')}`,
        });
    };
    next();
}

const list = async (req, res) => {
    const data = await service.list();
    res.json({ data });
}

const read = (req, res) => {
    res.json({ data: res.locals.user })
}

const create = async (req, res) => {
    const newUser = {
        ...req.body.data,
    }
    const data = await service.create(newUser);
    res.status(201).json({ data });
}

const update = async (req, res) => {
    const { userId } = req.params;
    const updatedUser = {
        ...req.body.data
    };
    const data = await service.update(userId, updatedUser);
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(userExists), read],
    create: [validBodyProperties, hasRequiredProperties, asyncErrorBoundary(create)],
    update: [asyncErrorBoundary(userExists), validBodyProperties, asyncErrorBoundary(update)],
}