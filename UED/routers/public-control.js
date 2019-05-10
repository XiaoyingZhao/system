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
					    data.public_control1_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    data.public_control1_data = await getAllData.getData.miaopaiAPP_data(601);
						data.public_control2_data = await getAllData.getData.miaopaiAPP_data(602);
						data.public_control3_data = await getAllData.getData.miaopaiAPP_data(603);
						data.public_control4_data = await getAllData.getData.miaopaiAPP_data(604);
						data.public_control5_data = await getAllData.getData.miaopaiAPP_data(605);
					    
					    res.render('web/public-control', {data});
					})();
					
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
						res.redirect('/guifan/admin/miaopaiapp/public-control');
					})();
				break;
				default:
				break;
			}
		break;
		
		case '2':
			switch(req.query.act){
				case 'mod':
					var data={};
					(async () => {
					    data.public_control2_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    data.public_control1_data = await getAllData.getData.miaopaiAPP_data(601);
						data.public_control2_data = await getAllData.getData.miaopaiAPP_data(602);
						data.public_control3_data = await getAllData.getData.miaopaiAPP_data(603);
						data.public_control4_data = await getAllData.getData.miaopaiAPP_data(604);
						data.public_control5_data = await getAllData.getData.miaopaiAPP_data(605);
					    
					    res.render('web/public-control', {data});
					})();
					
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
						res.redirect('/guifan/admin/miaopaiapp/public-control');
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
					    data.public_control3_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    data.public_control1_data = await getAllData.getData.miaopaiAPP_data(601);
						data.public_control2_data = await getAllData.getData.miaopaiAPP_data(602);
						data.public_control3_data = await getAllData.getData.miaopaiAPP_data(603);
						data.public_control4_data = await getAllData.getData.miaopaiAPP_data(604);
						data.public_control5_data = await getAllData.getData.miaopaiAPP_data(605);
					    
					    res.render('web/public-control', {data});
					})();
					
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
						res.redirect('/guifan/admin/miaopaiapp/public-control');
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
					    data.public_control4_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    data.public_control1_data = await getAllData.getData.miaopaiAPP_data(601);
						data.public_control2_data = await getAllData.getData.miaopaiAPP_data(602);
						data.public_control3_data = await getAllData.getData.miaopaiAPP_data(603);
						data.public_control4_data = await getAllData.getData.miaopaiAPP_data(604);
						data.public_control5_data = await getAllData.getData.miaopaiAPP_data(605);
					    
					    res.render('web/public-control', {data});
					})();
					
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
						res.redirect('/guifan/admin/miaopaiapp/public-control');
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
					    data.public_control5_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    data.public_control1_data = await getAllData.getData.miaopaiAPP_data(601);
						data.public_control2_data = await getAllData.getData.miaopaiAPP_data(602);
						data.public_control3_data = await getAllData.getData.miaopaiAPP_data(603);
						data.public_control4_data = await getAllData.getData.miaopaiAPP_data(604);
						data.public_control5_data = await getAllData.getData.miaopaiAPP_data(605);
					    
					    res.render('web/public-control', {data});
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
						res.redirect('/guifan/admin/miaopaiapp/public-control');
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
						data.public_control_second_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					
						data.public_control1_data = await getAllData.getData.miaopaiAPP_data(601);
						data.public_control2_data = await getAllData.getData.miaopaiAPP_data(602);
						data.public_control3_data = await getAllData.getData.miaopaiAPP_data(603);
						data.public_control4_data = await getAllData.getData.miaopaiAPP_data(604);
						data.public_control5_data = await getAllData.getData.miaopaiAPP_data(605);
						res.render('web/public-control',{data});
					})();
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
					    
						res.redirect('/guifan/admin/miaopaiapp/public-control');
					})();
				break;
				default:
				break;
			}
		break;
		default:
			var data = {};
			(async()=>{
				data.public_control1_data = await getAllData.getData.miaopaiAPP_data(601);
				data.public_control2_data = await getAllData.getData.miaopaiAPP_data(602);
				data.public_control3_data = await getAllData.getData.miaopaiAPP_data(603);
				data.public_control4_data = await getAllData.getData.miaopaiAPP_data(604);
				data.public_control5_data = await getAllData.getData.miaopaiAPP_data(605);
				
				res.render('web/public-control',{data});
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
					res.redirect('/guifan/admin/miaopaiapp/public-control');
				})()
			}
		break;
		case '2':
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
					res.redirect('/guifan/admin/miaopaiapp/public-control');
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
					res.redirect('/guifan/admin/miaopaiapp/public-control');
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
					res.redirect('/guifan/admin/miaopaiapp/public-control');
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
					res.redirect('/guifan/admin/miaopaiapp/public-control');
				})()
			}
		break;
		
		case 'miaopaiapp_second_list':
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
					key : 'content1',
					value : req.body.content1,
					name : Cookies.uxc_username,
					id : req.body.mod_id
				});
				for(i in picObj){
					getAllData.updateData.update_miaopaiAPP_data({
						key : 'content2',
						value : '//'+req.headers.host+'/guifan/admin/'+picObj[i],
						name : Cookies.uxc_username,
						id : req.body.mod_id
					});
				}
				
			};
			var _add = function(){
				var obj = {
					upid : req.body.upid,
					type : 605,
					content1 : req.body.content1,
					content2 : req.body.content2,
					name : Cookies.uxc_username
				};
				getAllData.insertData.insert_miaopaiAPP_data(`INSERT INTO miaopaiAPP_list (upid, type, content1, content2, name, time) VALUE ( ${obj.upid},'${obj.type}','${obj.content1}','${obj.content2}', '${obj.name}', CURRENT_TIMESTAMP() )`);
			};
			if(req.body.mod_id){//修改
				(async()=>{
					await _update();
					res.redirect('/guifan/admin/miaopaiapp/public-control');
				})()
			}else{				//添加
				(async()=>{
					await _add();
					res.redirect('/guifan/admin/miaopaiapp/public-control');
				})()
			}
		break;
		default:
		break;
	}
});

module.exports = router;