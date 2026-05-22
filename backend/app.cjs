const express = require('express');
const userRouter = require('./src/routes/user.routes.cjs');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1/users', userRouter);

module.exports = {
    app
}