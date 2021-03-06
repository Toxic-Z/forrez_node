var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db", { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
  if(err) return console.log(err);
  app.listen(3000, function() {
    console.log("Server is listening on port 3000...");
  });
});

var products = require('./routes/product');
var orders = require('./routes/order');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/products', products);
app.use('/orders', orders);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
