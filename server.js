var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/annanotes', {useMongoClient: true});

mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, './client/dist')));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var router = require('./server/config/routes.js');


router(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});



   
