var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var officialRouter = require('./routes/official.js');
var productRouter = require('./routes/product.js');
var userRouter = require('./routes/users.js');
var addressRouter = require('./routes/address.js');
var cartRouter = require('./routes/cart.js');
var areaRouter = require('./routes/area.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/official', officialRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);
app.use('/address', addressRouter);
app.use('/cart', cartRouter);
app.use('/area', areaRouter);


app.use(function(req, res, next){
	req.myPromise
		? req.myPromise
			.then(result => res.send(result))
			//物理失败
			.catch(error => res.send({ status: 199, message: error.message, data: null }))
		: next();
})

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
