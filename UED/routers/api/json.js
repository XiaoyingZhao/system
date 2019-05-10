const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const pathLib = require('path');
const common = require('../../libs/common');

var router = express.Router();
const db = mysql.createPool({hose:'127.0.0.1',user:'root',password:'',database:'ued'});


var getAllData = require("../../common/getdata");

router.get('/yixia_json', (req, res, next)=>{
	(async () => {
	    var brand = await getAllData.getJson.get_json(`SELECT * FROM menu_list WHERE  id=1 `);
	    var brandmix = await getAllData.getJson.get_json(`SELECT * FROM brand_list WHERE menuid=1`);
	    var content = await getAllData.getJson.get_json(`SELECT * FROM content_list WHERE menuid=1`);
	    //get log
	    var brandlog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=1 AND type1=1`);
	    var brandmixlog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=1 AND type1=2`);
	    var officelog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=1 AND type1=3`);
	    var fontlog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=1 AND type1=4`);
	    

	    var result = {
	    	brand : {
	    		name : "品牌标识",
	    		fname : brand[0].name,
	    		preview : brand[0].logo,
	    		logname : brand[0].name
	    	},
	    	manual : {
	    		name : "视觉识别手册",
	    		fname : brand[0].name,
	    		preview : brand[0].manual
	    	},
	    	brandmix : brandmix,
	    	content : content,
	    	log : {
	    		brand : {
	    			name : brandlog[0].name,
	    			time : brandlog[0].time
	    		},
	    		brandmix : {
	    			name : brandmixlog[0].name,
	    			time : brandmixlog[0].time
	    		},
	    		office : {
	    			name : officelog[0].name,
	    			time : officelog[0].time
	    		},
	    		font : {
	    			name : fontlog[0].name,
	    			time : fontlog[0].time
	    		}
	    	}
	    };
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});


router.get('/miaopai_json', (req, res, next)=>{
	(async () => {
	    var brand = await getAllData.getJson.get_json(`SELECT * FROM menu_list WHERE id=2`);
	    var brandmix = await getAllData.getJson.get_json(`SELECT * FROM brand_list WHERE menuid=2`);
	    var content = await getAllData.getJson.get_json(`SELECT * FROM content_list WHERE menuid=2`);
	  	
	  	//get log
	    var brandlog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=2 AND type1=1`);
	    var brandmixlog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=2 AND type1=2`);
	    var ewmlog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=2 AND type1=5`);
	    var standardlog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=2 AND type1=6`);
	   
	   
	    var result = {
	    	brand : {
	    		name : "品牌标识",
	    		fname : brand[0].name,
	    		preview : brand[0].logo
	    	},
	    	manual : {
	    		name : "视觉识别手册",
	    		fname : brand[0].name,
	    		preview : brand[0].manual
	    	},
	    	brandmix : brandmix,
	    	content : content,
	    	log : {
	    		brand : {
	    			name : brandlog[0].name,
	    			time : brandlog[0].time
	    		},
	    		brandmix : {
	    			name : brandmixlog[0].name,
	    			time : brandmixlog[0].time
	    		},
	    		ewm : {
	    			name : ewmlog[0].name,
	    			time : ewmlog[0].time
	    		},
	    		standard : {
	    			name : standardlog[0].name,
	    			time : standardlog[0].time
	    		}
	    	}
	    };
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});


router.get('/ued_json', (req, res, next)=>{
	(async () => {
	    var brand = await getAllData.getJson.get_json(`SELECT * FROM menu_list WHERE id=5`);
	    var brandmix = await getAllData.getJson.get_json(`SELECT * FROM brand_list WHERE menuid=5`);
	    var content = await getAllData.getJson.get_json(`SELECT * FROM content_list WHERE menuid=2`);
	  	
	  	// get logname
	  	var brandlog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=5 AND type1=1`);
	    var brandmixlog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=5 AND type1=2`);
	     
	  	
	    var result = {
	    	brand : {
	    		name : "品牌标识",
	    		fname : brand[0].name,
	    		preview : brand[0].logo
	    	},
	    	brandmix : brandmix,
	    	log : {
	    		brand : {
	    			name : brandlog[0].name,
	    			time : brandlog[0].time
	    		},
	    		brandmixlog : {
	    			name : brandmixlog[0].name,
	    			time : brandmixlog[0].time
	    		}
	    	}
	    };
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});

router.get('/app_preface_json', (req, res, next)=>{
	(async () => {
	    var content = await getAllData.getJson.get_json(`SELECT * FROM miaopaiAPP_list WHERE type=1`);
	    
	  	
	    var result = content;
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});
router.get('/app_standard_color_json', (req, res, next)=>{
	(async () => {
	    var content = await getAllData.getJson.get_json(`SELECT * FROM miaopaiAPP_list WHERE type=2`);
	    
	  	
	    var result = content;
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});
router.get('/app_standard_word_json', (req, res, next)=>{
	(async () => {
	    var content = await getAllData.getJson.get_json(`SELECT * FROM miaopaiAPP_list WHERE type=3`);
	    
	  	
	    var result = content;
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});
router.get('/app_icon_json', (req, res, next)=>{
	(async () => {
	    var content = await getAllData.getJson.get_json(`SELECT * FROM miaopaiAPP_list WHERE type like '40%'`);
	    
	  	
	    var result = content;
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});
router.get('/app_button_json', (req, res, next)=>{
	(async () => {
	    var content = await getAllData.getJson.get_json(`SELECT * FROM miaopaiAPP_list WHERE type=5`);
	    
	  	
	    var result = content;
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});
router.get('/app_public_control_json', (req, res, next)=>{
	(async () => {
	    var content = await getAllData.getJson.get_json(`SELECT * FROM miaopaiAPP_list WHERE type like '60%'`);
	    
	  	
	    var result = content;
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});
router.get('/app_module_json', (req, res, next)=>{
	(async () => {
	    var content = await getAllData.getJson.get_json(`SELECT * FROM miaopaiAPP_list WHERE type=7`);
	    
	  	
	    var result = content;
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});
router.get('/app_layout_json', (req, res, next)=>{
	(async () => {
	    var content = await getAllData.getJson.get_json(`SELECT * FROM miaopaiAPP_list WHERE type=8`);
	    
	  	
	    var result = content;
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});
router.get('/app_standard_pic_json', (req, res, next)=>{
	(async () => {
	    var content = await getAllData.getJson.get_json(`SELECT * FROM miaopaiAPP_list WHERE type=9`);
	    
	  	
	    var result = content;
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});
router.get('/app_component_library_json', (req, res, next)=>{
	(async () => {
	    var content = await getAllData.getJson.get_json(`SELECT * FROM miaopaiAPP_list WHERE type=10`);
	    
	  	
	    var result = content;
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});
router.get('/app_version_json', (req, res, next)=>{
	(async () => {
	    var content = await getAllData.getJson.get_json(`SELECT * FROM miaopaiAPP_list WHERE type=11`);
	    
	  	
	    var result = content;
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});


router.get('/yxfamily_json', (req, res, next)=>{
	(async () => {
	    var miaozai_application = await getAllData.getJson.get_json(`SELECT * FROM menu_list WHERE id=6`);
	    var miaozai_con = await getAllData.getJson.get_json(`SELECT * FROM content_list WHERE menuid=6`);
	    var xiaoka_application = await getAllData.getJson.get_json(`SELECT * FROM menu_list WHERE id=7`);
	    var xiaoka_con = await getAllData.getJson.get_json(`SELECT * FROM content_list WHERE menuid=7`);
	    var zhibo_application = await getAllData.getJson.get_json(`SELECT * FROM menu_list WHERE id=8`);
	    var zhibo_con = await getAllData.getJson.get_json(`SELECT * FROM content_list WHERE menuid=8`);
	    
	    //get log
	    var miaozailog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=3 AND type1=7`);
	    var xiaokalog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=3 AND type1=8`);
	    var zhibolog = await getAllData.getJson.get_json(`SELECT * FROM log_list WHERE menuid=3 AND type1=9`);
	   
	  
	    var result = [
	    	[
	    		miaozai_application,
	    		miaozai_con,
	    		miaozailog
	    	],
	    	[
	    		xiaoka_application,
	    		xiaoka_con,
	    		xiaokalog
	    	],
	    	[
	    		zhibo_application,
	    		zhibo_con,
	    		zhibolog
	    	]
	    ];
	 	res.jsonp({
	 		status:200,
	 		message:"OK",
	 		result:result
	 	})
	    
	})();
});

router.get('/admin_login',(req,res,next)=>{
	
	var username = req.query.username;
	var password = common.md5(req.query.password+common.MD5_SUFFIX);
	
	db.query(`SELECT * FROM admin_list WHERE name='${username}' `,(err,data)=>{
	
		if(err){
			console.error(err);
			res.jsonp({
		 		status:500,
		 		message:"database error!"
		 	}).end();
		}else{
		
			if(data.length == 0){
				res.jsonp({
			 		status:400,
			 		message:"没有这个管理员"
			 	}).end();
			}else{
				if(data[0].superadmin == 10){
					
					if(data[0].password == password){
						//成功
						req.session['admin_id'] = data[0].id;
	
						// res.redirect('/admin');
						// req.session['admin_id'] = data[0].id;
						
						res.cookie('uxc_username', username, {maxAge: 2000*60*1000});
						res.jsonp({
					 		status:200,
					 		message:"登陆成功",
					 		grade:data[0].superadmin,
					 		username:username
					 	}).end();
					}else{
						res.jsonp({
					 		status:400,
					 		message:"密码错误"
					 	}).end();
						// res.status(400).send('密码错误').end();
					}
					
					
				}else{
					res.jsonp({
				 		status:200,
				 		message:"登陆成功",
					 	grade:data[0].superadmin,
				 		username:username
				 	}).end();
					// res.status(400).send("抱歉，您没有权限").end();
				}
					
			}
				
		}
	})
	
});

module.exports = router;