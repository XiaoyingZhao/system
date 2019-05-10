const express = require('express');
const mysql = require('mysql');

// const db = mysql.createPool({hose:'localhost',user:'root',password:'',database:'test'});
const db = mysql.createPool({host:'127.0.0.1',user:'root',password:'',database:'ued'});

var router = express.Router();

router.get('/',(req,res,next)=>{
	var username = req.cookies.uxc_username;

	db.query(`SELECT * from menu_list WHERE upid <> 3`,(err,data)=>{
		if(err){
			console.error(err);
			res.status(500).send('database error').end();
		}else{
			db.query(`SELECT * from admin_list WHERE name = '${username}'`,(err,user)=>{
				if(err){
					console.error(err);
					res.status(500).send('database error').end();
				}else{
					res.render('web/nav', { user:user[0],data: data });
				}
				
			});
			
		}
	});
});

module.exports = router;