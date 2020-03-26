var express = require('express');
const path = require('path');
var app = express();

app.use(express.urlencoded({ extended: true }))

// view engine setup
app.set('views', path.join(__dirname, 'source/template'))
app.set('view engine', 'pug')

app.use(express.static(__dirname + "/public"));

app.use('/', require('./routes/index'));


// app.post('/login', function (req, res) {
//     // console.log(req.body)
//     // res.send(req.body)
// });

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found')
//     err.status = 404
//     next(err)
// });

// error handler
// app.use(function (err, req, res, next) {
//     // render the error page
//     res.status(err.status || 500)
//     res.render('error', { message: err.message, error: err })
// });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});