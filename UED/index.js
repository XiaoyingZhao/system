
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const multerObj = multer({dest:'./static/upload'});
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');

const path = require('path');



var server = express();
server.listen(80);

// 1.获取请求数据
server.use(bodyParser.urlencoded());
server.use(multerObj.any())
 
// 2.cookie/session
server.use(cookieParser());
(function(){
	var keys = [];
	for(var i=0;i<100;i++){
		keys[i] = 'a_'+Math.random();
	}
	server.use(cookieSession({
		name:'sess_id',
		keys:keys,
		maxAge:2000*60*1000 //20min
	}));
})()




// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');




// 4.router
// catch 404 and forward to error handler
// server.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// server.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


var api = require('./routers/api/json');
var admin = require('./routers/admin');

server.use('/guifan/api',api );
server.use('/guifan/admin',admin);


// 5.static
server.use('/guifan/admin/static',express.static('static'));
server.use('/guifan',express.static('uxc'));




module.exports = server;