const express = require('express');
const fs = require('fs');
const pathLib = require('path');
var getAllData = require("../common/getdata");
var router = express.Router();

router.get("/",(req,res,next)=>{
	switch (req.query.page){
		case '1':
			switch(req.query.act){
				case 'mod':
					var data={};
					(async () => {
					    data.icon1_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    data.icon_data = await getAllData.getData.miaopaiAPP_data(401);
						data.icon3_data = await getAllData.getData.miaopaiAPP_data(403);
						data.icon4_data = await getAllData.getData.miaopaiAPP_data(404);
						data.icon5_data = await getAllData.getData.miaopaiAPP_data(405);
					    
					    res.render('web/icon', {data});
					})();
					
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
					    
						res.redirect('/guifan/admin/miaopaiapp/icon');
					})();
				break;
				default:
				break;
			}
		break;
		case '3':
			switch(req.query.act){
				case 'mod':
					var data={};
					(async () => {
					    data.icon3_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    data.icon_data = await getAllData.getData.miaopaiAPP_data(401);
						data.icon3_data = await getAllData.getData.miaopaiAPP_data(403);
						data.icon4_data = await getAllData.getData.miaopaiAPP_data(404);
						data.icon5_data = await getAllData.getData.miaopaiAPP_data(405);
					    
					    res.render('web/icon', {data});
					})();
					
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
					    
						res.redirect('/guifan/admin/miaopaiapp/icon');
					})();
				break;
				default:
				break;
			}
		break;
		case '4':
			switch(req.query.act){ 
				case 'mod':
					var data={};
					(async () => {
					    data.icon4_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    data.icon_data = await getAllData.getData.miaopaiAPP_data(401);
						data.icon3_data = await getAllData.getData.miaopaiAPP_data(403);
						data.icon4_data = await getAllData.getData.miaopaiAPP_data(404);
						data.icon5_data = await getAllData.getData.miaopaiAPP_data(405);
					    
					    res.render('web/icon', {data});
					})();
					
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
					    
						res.redirect('/guifan/admin/miaopaiapp/icon');
					})();
				break;
				default:
				break;
			}
		break;
		case '5':
			switch(req.query.act){
				case 'mod':
					var data={};
					(async () => {
					    data.icon5_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    
						data.icon_data = await getAllData.getData.miaopaiAPP_data(401);
						data.icon3_data = await getAllData.getData.miaopaiAPP_data(403);
						data.icon4_data = await getAllData.getData.miaopaiAPP_data(404);
						data.icon5_data = await getAllData.getData.miaopaiAPP_data(405);
					    
					    res.render('web/icon', {data});
					})();
					
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
					    
						res.redirect('/guifan/admin/miaopaiapp/icon');
					})();
				break;
				default:
				break;
			}
		break;
		default:
			var data = {};
			(async()=>{
				data.icon_data = await getAllData.getData.miaopaiAPP_data(401);
				data.icon3_data = await getAllData.getData.miaopaiAPP_data(403);
				data.icon4_data = await getAllData.getData.miaopaiAPP_data(404);
				data.icon5_data = await getAllData.getData.miaopaiAPP_data(405);
				
				res.render('web/icon',{data});
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
		case '1':
			var _update = function(){
				getAllData.updateData.update_miaopaiAPP_data({
					key : 'title',
					value : req.body.title,
					name : Cookies.uxc_username,
					id : req.body.mod_id
				});
				getAllData.updateData.update_miaopaiAPP_data({
					key : 'descr',
					value : req.body.descr,
					name : Cookies.uxc_username,
					id : req.body.mod_id
				});
			};
			
			if(req.body.mod_id){//修改
				(async()=>{
					await _update();
					res.redirect('/guifan/admin/miaopaiapp/icon');
				})()
			}
		break;
		case '3':
			var picObj = {};
			for(var i=0;i<req.files.length;i++){
				var ext = pathLib.parse(req.files[i].originalname).ext;
				var oldPath = req.files[i].path;
				var newPath = req.files[i].path + ext;
				
				fs.renameSync(oldPath,newPath)
				picObj[req.files[i].fieldname] = newPath;
			}
			
			var _update = function(){
				getAllData.updateData.update_miaopaiAPP_data({
					key : 'title',
					value : req.body.title,
					name : Cookies.uxc_username,
					id : req.body.mod_id
				});
				getAllData.updateData.update_miaopaiAPP_data({
					key : 'descr',
					value : req.body.descr,
					name : Cookies.uxc_username,
					id : req.body.mod_id
				});
				
				for(i in picObj){
					getAllData.updateData.update_miaopaiAPP_data({
						key : i,
						value : '//'+req.headers.host+'/guifan/admin/'+picObj[i],
						name : Cookies.uxc_username,
						id : req.body.mod_id
					});
					
				}
			};
			
			if(req.body.mod_id){//修改
				(async()=>{
					await _update();
					res.redirect('/guifan/admin/miaopaiapp/icon');
				})()
			}
		break;
		
		case '4':
			var picObj = {};
	
			for(var i=0;i<req.files.length;i++){
				var ext = pathLib.parse(req.files[i].originalname).ext;
				var oldPath = req.files[i].path;
				var newPath = req.files[i].path + ext;
				
				fs.renameSync(oldPath,newPath)
				picObj[req.files[i].fieldname] = newPath;
			}
			
			var _update = function(){
				getAllData.updateData.update_miaopaiAPP_data({
					key : 'title',
					value : req.body.title,
					name : Cookies.uxc_username,
					id : req.body.mod_id
				});
				for(i in picObj){
					getAllData.updateData.update_miaopaiAPP_data({
						key : i,
						value : '//'+req.headers.host+'/guifan/admin/'+picObj[i],
						name : Cookies.uxc_username,
						id : req.body.mod_id
					});
				}
				
			};
			
			if(req.body.mod_id){//修改
				(async()=>{
					await _update();
					res.redirect('/guifan/admin/miaopaiapp/icon');
				})()
			}
		break;
		case '5':
			var picObj = {};
			for(var i=0;i<req.files.length;i++){
				var ext = pathLib.parse(req.files[i].originalname).ext;
				var oldPath = req.files[i].path;
				var newPath = req.files[i].path + ext;
				
				fs.renameSync(oldPath,newPath)
				picObj[req.files[i].fieldname] = newPath;
			}
			
			var _update = function(){
				getAllData.updateData.update_miaopaiAPP_data({
					key : 'title',
					value : req.body.title,
					name : Cookies.uxc_username,
					id : req.body.mod_id
				});
				for(i in picObj){
					getAllData.updateData.update_miaopaiAPP_data({
						key : i,
						value : '//'+req.headers.host+'/guifan/admin/'+picObj[i],
						name : Cookies.uxc_username,
						id : req.body.mod_id
					});
				}
			};
			
			if(req.body.mod_id){//修改
				(async()=>{
					await _update();
					res.redirect('/guifan/admin/miaopaiapp/icon');
				})()
			}
		break;
		default:
		break;
	}
});

module.exports = router;