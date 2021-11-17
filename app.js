const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const usersRouter = require('./routes/users');

const indexRouter = require('./routes/index');


const aboutRouter = require('./routes/about');
const cartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');
const galleryRouter = require('./routes/gallery');
const my_accountRouter = require('./routes/my_account');
const shopRouter = require('./routes/shop');
const shop_detailRouter = require('./routes/shop_detail');
const wishlistRouter = require('./routes/wishlist');
const contact_usRouter = require('./routes/contact_us');



const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/about', aboutRouter);
app.use('/checkout', checkoutRouter);
app.use('/contact_us', contact_usRouter);
app.use('/cart', cartRouter);
app.use('/my_account', my_accountRouter);
app.use('/shop', shopRouter);
app.use('/shop_detail', shop_detailRouter);
app.use('/wishlist', wishlistRouter);
app.use('/gallery',galleryRouter);


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
