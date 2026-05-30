const express = require('express');
const userRouter = require('./src/routes/user.routes.cjs');
const pdfRouter = require('./src/routes/pdf.routes.cjs');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/pdfs', pdfRouter);

module.exports = {
    app
}