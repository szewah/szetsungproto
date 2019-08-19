var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var PORT = 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

require("./routes/routes")(app);
// app.get('/', (req,res) => {
//   res.sendFile(path.join(__dirname, './public/files/index.html'))
// })


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // send an error message
//   res.status(err.status || 500);
//   res.send('error');
// });



app.listen(PORT, function(err) {
  console.log("Magic is happening at http://localhost:" + PORT)
})
