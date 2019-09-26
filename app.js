const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');


require('./app_server/models/db');
require('./app_server/config/passport');

const indexRouter = require('./app_server/routes/index');
const workoutProgramRouter = require('./app_server/routes/workoutprogram');
const localsMiddleware = require('./app_server/middleware/locals');


const app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'yayeet',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: false,
    secure: false,
    maxAge: 1000 * 3600 * 24 * 100 // 100 days
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use('/', indexRouter);
app.use('/workoutprograms', workoutProgramRouter);

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
