const express = require('express');
const cors = require('cors');
const errorHandler = require('./errors/errorHandler');
const notFound = require('./errors/notFound');
const app = express();

const usersRouter = require('./users/users.router');
const postsRouter = require('./posts/posts.router');
const topicsRouter = require('./topics/topics.router');

app.use(cors());
app.use(express.json());

//Routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/topics', topicsRouter);

//Page Not Found / Error Handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;