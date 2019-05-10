const express = require('express');
const fs = require('fs');
const pathLib = require('path');
var getAllData = require("../common/getdata");
var router = express.Router();

router.get("/",(req,res,next)=>{
	switch (req.query.page){
		
		case 'miaopaiapp_list':
			switch(req.query.act){
				case 'mod':
					var data={};
					(async () => {
					    data.standard_pic_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    data.standard_pic_data = await getAllData.getData.miaopaiAPP_data(9);
					    
					    res.render('web/standard-pic', {data});
					})();
					
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"upid",
					    	value:req.query.id
					    });
						res.redirect('/guifan/admin/miaopaiapp/standard-pic');
					})();
				break;
				default:
				break;
			}
		break;
		case 'miaopaiapp_second_list':
			switch(req.query.act){
				case 'mod':
					var data = {};
					(async()=>{
						data.standard_pic_second_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					
						data.standard_pic_data = await getAllData.getData.miaopaiAPP_data(9);
						res.render('web/standard-pic',{data});
					})();
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
					    
						res.redirect('/guifan/admin/miaopaiapp/standard-pic');
					})();
				break;
				default:
				break;
			}
		break;
		default:
			var data = {};
			(async()=>{
				data.standard_pic_data = await getAllData.getData.miaopaiAPP_data(9);
				
				res.render('web/standard-pic',{data});
			})();
			
		break;
		
	}
	
	
	
});

router.post('/',(req,res,next)=>{
	var Cookies ={};
	if (req.headers.cookie != null) {
		req.headers.cookie.split(';').forEach(l => {
			var parts = l.split('=');
			Cookies[parts[0].trim()] = (parts[1] || '').trim();
		});
	}
	
	switch (req.body.page_id) {
		case 'miaopaiapp_second_list':
			
			var _update = function(){
				getAllData.updateData.update_miaopaiAPP_data({
					key : 'content1',
					value : req.body.content1,
					name : Cookies.uxc_username,
					id : req.body.mod_id
				});
				getAllData.updateData.update_miaopaiAPP_data({
					key : 'content2',
					value : req.body.content2,
					name : Cookies.uxc_username,
					id : req.body.mod_id
				});
				getAllData.updateData.update_miaopaiAPP_data({
					key : 'content3',
					value : req.body.content3,
					name : Cookies.uxc_username,
					id : req.body.mod_id
				});
			};
			var _add = function(){
				var obj = {
					upid : 0,
					type : 9,
					content1 : req.body.content1,
					content2 : req.body.content2,
					content3 : req.body.content3,
					name : Cookies.uxc_username
				};
				getAllData.insertData.insert_miaopaiAPP_data(`INSERT INTO miaopaiAPP_list (upid, type, content1, content2, content3, name, time) VALUE ( ${obj.upid},'${obj.type}','${obj.content1}','${obj.content2}','${obj.content3}', '${obj.name}', CURRENT_TIMESTAMP() )`);
			};
			if(req.body.mod_id){//修改
				(async()=>{
					await _update();
					res.redirect('/guifan/admin/miaopaiapp/standard-pic');
				})()
			}else{				//添加
				(async()=>{
					await _add();
					res.redirect('/guifan/admin/miaopaiapp/standard-pic');
				})()
			}
		break;
		default:
		break;
	}
});

module.exports = router;