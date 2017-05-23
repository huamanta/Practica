var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
//var clssuma = require('./Controller/ClsSuma.js'); +clssuma.suma(2,3)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
require('./rutas.js')(app);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Origin', 'GET, PUT, UPDATE, DELETE');
    res.header('Access-Control-Allow-Origin', 'Content-Type');
    next();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
 