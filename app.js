var express = require('express');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');
var app = express();

app.use(morgan('combined'));
app.set('views', './src/views');
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index');
})

app.listen(3000, function () {
    debug(`Listening on port 3000`);
});