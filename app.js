var express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
var app = express();

app.use(cookieParser('secret key'));
app.use(session({ cookie: { maxAge: 3600 * 24 } }));
app.use(flash());

app.use(express.urlencoded({ extended: true }))

// view engine setup
app.set('views', path.join(__dirname, 'source/template'))
app.set('view engine', 'pug')

// router
app.use('/', require('./routes/index'));

app.use(express.static(__dirname + "/public"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
});

// error handler
app.use(function (err, req, res, next) {
    // render the error page
    res.status(err.status || 500)
    res.render('error', { message: err.message, error: err })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});