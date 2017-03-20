var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const google = require('googleapis');
const mongoose = require('mongoose');
// /**  */

var app = express();


app.set('views' , path.join(__dirname , 'views'));
app.set("view engine" , "ejs");
app.engine("html" , require("ejs").renderFile);
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});


const googleConfig = require('./config/google-config.js');
const appConfig = require('./config/app-config.js');
mongoose.connect(appConfig.db);
const userController = require('./controllers/user.js')(google, googleConfig );
const routes = require('./routes/index')(express);
const users = require('./routes/users')(express, userController);
//var api = require("./routes/api");
const Groupe = require('./model/groupe.js')(mongoose);
const Section = require('./model/section.js')(mongoose);
const Student = require('./model/student.js')(mongoose);
const Year = require('./model/year.js')(mongoose);
const Spec = require('./model/spec.js')(mongoose);
const scolariteController = require('./controllers/scolarite-controller.js')(Groupe, Section, Student, Year, Spec);
const scolariteRoute = require('./routes/scolarite.js')(express, scolariteController);
//const verify = userController.verifyToken();
app.use('/', routes);
app.use('/users', users);
app.use('/scolarite', scolariteRoute);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});


module.exports = app;
