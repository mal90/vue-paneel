/**
 * Simple express server with minimal code
 * to run the application using static files in /dist dir.
 * This was created to run the application in heroku server.
 */
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use('/',serveStatic(__dirname));
var port = process.env.PORT || 5000;
console.log('dir '+ __dirname);
app.listen(port);
console.log('server started '+ port);