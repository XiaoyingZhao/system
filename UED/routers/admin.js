const express = require('express');
const common = require('../libs/common');
const mysql = require('mysql');

// const db = mysql.createPool({hose:'localhost',user:'root',password:'',database:'test'});

const db = mysql.createPool({hose:'127.0.0.1',user:'root',password:'',database:'ued'});

var router = express.Router();

// var ued = require('./routers/ued');
	
	
// server.use('/ued',ued);

var nav = require('./nav');
var ued = require('./ued');
var yixia = require('./yixia');
var miaopai = require('./miaopai');
var yxfamily = require('./yxfamily');
var miaopaiapp = require('./miaopaiapp');

/* GET users listing. */
router.use((req,res,next)=>{
	
	if(req.url.indexOf('/static/') == 0){ 
		next();
	}else if(!req.session['admin_id'] && req.url != '/login'  ){//没有登录
		res.redirect('/guifan/admin/login');
	}else{
		next();
	}
});

// console.log(common.md5("123456"+common.MD5_SUFFIX));
// router.post('/login', (req, res, next)=>{
	
// 	var username = req.body.username;
// 	var password = common.md5(req.body.password+common.MD5_SUFFIX); 
// 	// console.log( common.md5('123456'+common.MD5_SUFFIX))
// 	db.query(`SELECT * FROM admin_list WHERE name='${username}' `,(err,data)=>{
// 		if(err){
// 			console.error(err);
// 			res.status(500).send('database error!').end();
// 		}else{
// 			if(data.length == 0){
// 				res.status(400).send("没有这个管理员").end();
// 			}else{
// 				if(data[0].superadmin == 10){
					
// 					if(data[0].password == password){
// 						//成功
// 						req.session['admin_id'] = data[0].id;
						
// 						res.cookie('uxc_username', username, {maxAge: 60 * 1000 * 60 * 12});
// 						res.redirect('/guifan/admin');
// 					}else{
						
// 						res.status(400).send('密码错误').end();
// 					}
					
					
// 				}else{
// 					res.status(400).send("抱歉，您没有权限").end();
// 				}
					
// 			}
				
// 		}
// 	})
	
	
	
  
// });

router.get('/login',(req,res,next)=>{
	// res.render('admin/login.ejs',{})
	res.redirect('/guifan/files/login.html');
});

router.get('/',(req,res,next)=>{
	res.render('admin/index',{});
})


router.use('/nav',nav);
router.use('/ued',ued);
router.use('/yixia',yixia);
router.use('/miaopai',miaopai);
router.use('/yxfamily',yxfamily);
router.use('/miaopaiapp',miaopaiapp);


module.exports = router;
