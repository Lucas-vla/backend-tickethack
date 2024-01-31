var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var trajetsRouter = require('./routes/trajets');
var app = express();
var cartRouter = require('./routes/cart')
var bookingRouter = require('./routes/booking')
require ("./models/connection")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())


app.use('/', indexRouter);
app.use('/trajets', trajetsRouter);
app.use('/booking', bookingRouter);
app.use('/cart', cartRouter)

module.exports = app;
