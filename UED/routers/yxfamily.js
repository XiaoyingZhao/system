const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const pathLib = require('path');
const common = require('../libs/common');

var router = express.Router();


var getAllData = require("../common/getdata");



router.get('/', (req, res, next)=>{
	
	switch (req.query.page){
		case 'miaozai_application_list':
			switch (req.query.act) {
				case 'mod':
					var data={};
					
					(async () => {
						// 修改内容
					    data.miaozai_application_list_mod_data = await getAllData.getModData.menu_list_mod_data(req.query.id);
					    
					    // 其他显示内容
					    // 秒仔
					    data.miaozai_application_data = await getAllData.getData.menu_data(6);
					    data.content_miaozai_data = await getAllData.getData.content_data(6,5);
			    		// 小咖君
			    		data.xiaoka_application_data = await getAllData.getData.menu_data(7);
					    data.content_xiaoka_data = await getAllData.getData.content_data(7,5);
			    		// 直播菌
			    		data.zhibo_application_data = await getAllData.getData.menu_data(8);
					    data.content_zhibo_data = await getAllData.getData.content_data(8,5);
					    
					    res.render('web/yxfamily', {data});
					})();
					break;
				default:
					break;
			}
			
			break;
		case 'content_miaozai_list':
			switch (req.query.act) {
				case 'mod':
					var data={};
					
					(async () => {
						// 修改内容
					    data.content_miaozai_list_mod_data = await getAllData.getModData.content_list_mod_data(6,5,req.query.id);

					    // 其他显示内容
					    // 秒仔
					    data.miaozai_application_data = await getAllData.getData.menu_data(6);
					    data.content_miaozai_data = await getAllData.getData.content_data(6,5);
			    		// 小咖君
			    		data.xiaoka_application_data = await getAllData.getData.menu_data(7);
					    data.content_xiaoka_data = await getAllData.getData.content_data(7,5);
			    		// 直播菌
			    		data.zhibo_application_data = await getAllData.getData.menu_data(8);
					    data.content_zhibo_data = await getAllData.getData.content_data(8,5);
					    
					    res.render('web/yxfamily', {data});
					})();
					break;
				case 'del':
					(async () => {
					    var deleteFile = await getAllData.delData.del_content_data(req.query.id);
					    if ( deleteFile.pic1 !== null && deleteFile.pic1 !== 'undefined' && deleteFile.pic1 !== ''){
				    		common.deleteFile(deleteFile.pic1);
					    }
					    if(deleteFile.pic2 !== null && deleteFile.pic2 !== 'undefined' && deleteFile.pic2 !== ''){
				    		common.deleteFile(deleteFile.pic2);
					    }
					    if(deleteFile.pic3 !== null && deleteFile.pic3 !== 'undefined' && deleteFile.pic3 !== ''){
				    		common.deleteFile(deleteFile.pic3);
					    }
					    res.redirect('/guifan/admin/yxfamily');
					})();
					break;
				default:
					break;
			}
			
			break;
		case 'xiaoka_application_list':
			switch (req.query.act) {
				case 'mod':
					var data={};
					
					(async () => {
						// 修改内容
					    data.xiaoka_application_list_mod_data = await getAllData.getModData.menu_list_mod_data(7,5,req.query.id);

					    // 其他显示内容
						// 秒仔
					    data.miaozai_application_data = await getAllData.getData.menu_data(6);
					    data.content_miaozai_data = await getAllData.getData.content_data(6,5);
			    		// 小咖君
			    		data.xiaoka_application_data = await getAllData.getData.menu_data(7);
					    data.content_xiaoka_data = await getAllData.getData.content_data(7,5);
			    		// 直播菌
			    		data.zhibo_application_data = await getAllData.getData.menu_data(8);
					    data.content_zhibo_data = await getAllData.getData.content_data(8,5);
					    
					    res.render('web/yxfamily', {data});
					})();
					break;
				case 'del':
					(async () => {
					    var deleteFile = await getAllData.delData.del_content_data(req.query.id);
					    if ( deleteFile.pic1 !== null && deleteFile.pic1 !== 'undefined' && deleteFile.pic1 !== ''){
				    		common.deleteFile(deleteFile.pic1);
					    }
					    if(deleteFile.pic2 !== null && deleteFile.pic2 !== 'undefined' && deleteFile.pic2 !== ''){
				    		common.deleteFile(deleteFile.pic2);
					    }
					    if(deleteFile.pic3 !== null && deleteFile.pic3 !== 'undefined' && deleteFile.pic3 !== ''){
				    		common.deleteFile(deleteFile.pic3);
					    }
					    res.redirect('/guifan/admin/yxfamily');
					})();
					break;
				default:
					break;
			}
			
			break;
		
		case 'content_xiaoka_list':
			switch (req.query.act) {
				case 'mod':
					var data={};
					
					(async () => {
						// 修改内容
					    data.content_xiaoka_list_mod_data = await getAllData.getModData.content_list_mod_data(7,5,req.query.id);

					    // 其他显示内容
					    // 秒仔
					    data.miaozai_application_data = await getAllData.getData.menu_data(6);
					    data.content_miaozai_data = await getAllData.getData.content_data(6,5);
			    		// 小咖君
			    		data.xiaoka_application_data = await getAllData.getData.menu_data(7);
					    data.content_xiaoka_data = await getAllData.getData.content_data(7,5);
			    		// 直播菌
			    		data.zhibo_application_data = await getAllData.getData.menu_data(8);
					    data.content_zhibo_data = await getAllData.getData.content_data(8,5);
					    
					    res.render('web/yxfamily', {data});
					})();
					break;
				case 'del':
					(async () => {
					    var deleteFile = await getAllData.delData.del_content_data(req.query.id);
					    if ( deleteFile.pic1 !== null && deleteFile.pic1 !== 'undefined' && deleteFile.pic1 !== ''){
				    		common.deleteFile(deleteFile.pic1);
					    }
					    if(deleteFile.pic2 !== null && deleteFile.pic2 !== 'undefined' && deleteFile.pic2 !== ''){
				    		common.deleteFile(deleteFile.pic2);
					    }
					    if(deleteFile.pic3 !== null && deleteFile.pic3 !== 'undefined' && deleteFile.pic3 !== ''){
				    		common.deleteFile(deleteFile.pic3);
					    }
					    res.redirect('/guifan/admin/yxfamily');
					})();
					break;
				default:
					break;
			}
			
			break;
		case 'zhibo_application_list':
			switch (req.query.act) {
				case 'mod':
					var data={};
					
					(async () => {
						// 修改内容
					    data.zhibo_application_list_mod_data = await getAllData.getModData.menu_list_mod_data(8,5,req.query.id);

					    // 其他显示内容
						// 秒仔
					    data.miaozai_application_data = await getAllData.getData.menu_data(6);
					    data.content_miaozai_data = await getAllData.getData.content_data(6,5);
			    		// 小咖君
			    		data.xiaoka_application_data = await getAllData.getData.menu_data(7);
					    data.content_xiaoka_data = await getAllData.getData.content_data(7,5);
			    		// 直播菌
			    		data.zhibo_application_data = await getAllData.getData.menu_data(8);
					    data.content_zhibo_data = await getAllData.getData.content_data(8,5);
					    
					    res.render('web/yxfamily', {data});
					})();
					break;
				case 'del':
					(async () => {
					    var deleteFile = await getAllData.delData.del_content_data(req.query.id);
					    if ( deleteFile.pic1 !== null && deleteFile.pic1 !== 'undefined' && deleteFile.pic1 !== ''){
				    		common.deleteFile(deleteFile.pic1);
					    }
					    if(deleteFile.pic2 !== null && deleteFile.pic2 !== 'undefined' && deleteFile.pic2 !== ''){
				    		common.deleteFile(deleteFile.pic2);
					    }
					    if(deleteFile.pic3 !== null && deleteFile.pic3 !== 'undefined' && deleteFile.pic3 !== ''){
				    		common.deleteFile(deleteFile.pic3);
					    }
					    res.redirect('/guifan/admin/yxfamily');
					})();
					break;
				default:
					break;
			}
			
			break;
			
		case 'content_zhibo_list':
			switch (req.query.act) {
				case 'mod':
					var data={};
					
					(async () => {
						// 修改内容
					    data.content_zhibo_list_mod_data = await getAllData.getModData.content_list_mod_data(8,5,req.query.id);

					    // 其他显示内容
					    // 秒仔
					    data.miaozai_application_data = await getAllData.getData.menu_data(6);
					    data.content_miaozai_data = await getAllData.getData.content_data(6,5);
			    		// 小咖君
			    		data.xiaoka_application_data = await getAllData.getData.menu_data(7);
					    data.content_xiaoka_data = await getAllData.getData.content_data(7,5);
			    		// 直播菌
			    		data.zhibo_application_data = await getAllData.getData.menu_data(8);
					    data.content_zhibo_data = await getAllData.getData.content_data(8,5);
					    
					    res.render('web/yxfamily', {data});
					})();
					break;
				case 'del':
					(async () => {
					    var deleteFile = await getAllData.delData.del_content_data(req.query.id);
					    if ( deleteFile.pic1 !== null && deleteFile.pic1 !== 'undefined' && deleteFile.pic1 !== ''){
				    		common.deleteFile(deleteFile.pic1);
					    }
					    if(deleteFile.pic2 !== null && deleteFile.pic2 !== 'undefined' && deleteFile.pic2 !== ''){
				    		common.deleteFile(deleteFile.pic2);
					    }
					    if(deleteFile.pic3 !== null && deleteFile.pic3 !== 'undefined' && deleteFile.pic3 !== ''){
				    		common.deleteFile(deleteFile.pic3);
					    }
					    res.redirect('/guifan/admin/yxfamily');
					})();
					break;
				default:
					break;
			}
			
			break;
		default:
			var data={};
			
			(async () => {
				// 秒仔
			    data.miaozai_application_data = await getAllData.getData.menu_data(6);
			    data.content_miaozai_data = await getAllData.getData.content_data(6,5);
	    		// 小咖君
	    		data.xiaoka_application_data = await getAllData.getData.menu_data(7);
			    data.content_xiaoka_data = await getAllData.getData.content_data(7,5);
	    		// 直播菌
	    		data.zhibo_application_data = await getAllData.getData.menu_data(8);
			    data.content_zhibo_data = await getAllData.getData.content_data(8,5);
			    
			    res.render('web/yxfamily', {data});
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
		
		case "miaozai_application_list":
			var picObj = {};
	
			for(var i=0;i<req.files.length;i++){
				var ext = pathLib.parse(req.files[i].originalname).ext;
				var oldPath = req.files[i].path;
				var newPath = req.files[i].path + ext;
				
				fs.renameSync(oldPath,newPath)
				picObj[req.files[i].fieldname] = newPath;
			}
			
			var _update = function(){
				for(i in picObj){
					var updataFile;
					var obj = {
						key : i,
						value : '//'+req.headers.host+'/guifan/admin/'+picObj[i],
						id : req.body.mod_id
					};
					
					updataFile = getAllData.updateData.update_menu_data(obj);
					
					
				}
				getAllData.updateData.update_menu_data({
					key : 'descr',
					value : req.body.descr,
					id : req.body.mod_id
				});
				return updataFile;
			};
			
			
			
			if(req.body.mod_id){//修改
				
				(async () => {
					var updataFile = await _update();
					
					//删除之前文件
					for(i in picObj){
						common.deleteFile(updataFile[i]);
					}
				    
					//set log
				    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:3,type1:7});
				    
				    res.redirect('/guifan/admin/yxfamily');
				})();
				
				
			}
			break;
		case "content_miaozai_list":
			var picObj = {};
	
			for(var i=0;i<req.files.length;i++){
				var ext = pathLib.parse(req.files[i].originalname).ext;
				var oldPath = req.files[i].path;
				var newPath = req.files[i].path + ext;
				
				fs.renameSync(oldPath,newPath)
				picObj[req.files[i].fieldname] = newPath;
			}
			
			
			var _update = function(){
				 var updataFile;
				for(i in picObj){
					var obj = {
						key : i,
						value : '//'+req.headers.host+'/guifan/admin/'+picObj[i],
						id : req.body.mod_id
					};
					
					updataFile = getAllData.updateData.update_content_data(obj);
					
				}
				getAllData.updateData.update_content_data({
					key : 'title',
					value : req.body.title,
					id : req.body.mod_id
				});
				getAllData.updateData.update_content_data({
					key : 'descr',
					value : req.body.descr,
					id : req.body.mod_id
				});
				return updataFile;
			};
			
			var _add = function(){
				
				getAllData.insertData.insert_content_data({
					menuid : 6,
					title : req.body.title,
					descr : req.body.descr,
					pic1 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic1'],
					pic2 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic2'],
					pic3 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic3'],
					type1 : 5
				});
				aaa
			};
			
			if(req.body.mod_id){//修改
				(async () => {
					var updataFile = await _update();
					//删除之前文件
					for(i in picObj){
						common.deleteFile(updataFile[i]);
					}
				    
					//set log
				    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:3,type1:7});
				    
				    res.redirect('/guifan/admin/yxfamily');
				})();
			}else{				//添加
				if( !req.body.title || !req.body.descr || !picObj['pic1'] || !picObj['pic2'] || !picObj['pic3']){
					res.status(500).send('args error').end();
				}else{
					(async () => {
						await _add();
						
						//set log
					    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:3,type1:7});
						res.redirect('/guifan/admin/yxfamily'); 
					})();
					
				}
			}
			break;
		case "xiaoka_application_list":
			var picObj = {};
	
			for(var i=0;i<req.files.length;i++){
				var ext = pathLib.parse(req.files[i].originalname).ext;
				var oldPath = req.files[i].path;
				var newPath = req.files[i].path + ext;
				
				fs.renameSync(oldPath,newPath)
				picObj[req.files[i].fieldname] = newPath;
			}
			
			var _update = function(){
				var updataFile;
				for(i in picObj){
					var obj = {
						key : i,
						value : '//'+req.headers.host+'/guifan/admin/'+picObj[i],
						id : req.body.mod_id
					};
					
					updataFile = getAllData.updateData.update_menu_data(obj);
					
					
				}
				getAllData.updateData.update_menu_data({
					key : 'descr',
					value : req.body.descr,
					id : req.body.mod_id
				});
				return updataFile;
			};
			
			
			
			if(req.body.mod_id){//修改
				
				(async () => {
					var updataFile = await _update();
					//删除之前文件
					for(i in picObj){
						common.deleteFile(updataFile[i]);
					}
					
					//set log
				    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:3,type1:8});
				    
				    res.redirect('/guifan/admin/yxfamily');
				})();
				
				
			}
			break;
		case "content_xiaoka_list":
			var picObj = {};
	
			for(var i=0;i<req.files.length;i++){
				var ext = pathLib.parse(req.files[i].originalname).ext;
				var oldPath = req.files[i].path;
				var newPath = req.files[i].path + ext;
				
				fs.renameSync(oldPath,newPath)
				picObj[req.files[i].fieldname] = newPath;
			}
			
			
			var _update = function(){
				var updataFile;
				for(i in picObj){
					var obj = {
						key : i,
						value : '//'+req.headers.host+'/guifan/admin/'+picObj[i],
						id : req.body.mod_id
					};
					
					updataFile = getAllData.updateData.update_content_data(obj);
					
					
				}
				getAllData.updateData.update_content_data({
					key : 'title',
					value : req.body.title,
					id : req.body.mod_id
				});
				getAllData.updateData.update_content_data({
					key : 'descr',
					value : req.body.descr,
					id : req.body.mod_id
				});
				return updataFile;
			};
			
			var _add = function(){
				
				getAllData.insertData.insert_content_data({
					menuid : 7,
					title : req.body.title,
					descr : req.body.descr,
					pic1 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic1'],
					pic2 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic2'],
					pic3 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic3'],
					type1 : 5
				});
				
			};
			
			if(req.body.mod_id){//修改
				(async () => {
					var updataFile = await _update();
					//删除之前文件
					for(i in picObj){
						common.deleteFile(updataFile[i]);
					}
					//set log
				    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:3,type1:8});
				    
				    res.redirect('/guifan/admin/yxfamily');
				})();
			}else{				//添加
				if( !req.body.title || !req.body.descr || !picObj['pic1'] || !picObj['pic2'] || !picObj['pic3']){
					res.status(500).send('args error').end();
				}else{
					(async () => {
						await _add();
						
						//set log
					    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:3,type1:8});
					    
						res.redirect('/guifan/admin/yxfamily'); 
					})();
					
				}
			}
			break;
		case "zhibo_application_list":
			var picObj = {};
	
			for(var i=0;i<req.files.length;i++){
				var ext = pathLib.parse(req.files[i].originalname).ext;
				var oldPath = req.files[i].path;
				var newPath = req.files[i].path + ext;
				
				fs.renameSync(oldPath,newPath)
				picObj[req.files[i].fieldname] = newPath;
			}
			
			var _update = function(){
				var updataFile;
				for(i in picObj){
					var obj = {
						key : i,
						value : '//'+req.headers.host+'/guifan/admin/'+picObj[i],
						id : req.body.mod_id
					};
					
					updataFile = getAllData.updateData.update_menu_data(obj);
					
					
				}
				getAllData.updateData.update_menu_data({
					key : 'descr',
					value : req.body.descr,
					id : req.body.mod_id
				});
				return updataFile;
			};
			
			
			
			if(req.body.mod_id){//修改
				
				(async () => {
					var updataFile = await _update();
					//删除之前文件
					for(i in picObj){
						common.deleteFile(updataFile[i]);
					}
					//set log
				    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:3,type1:9});
				    
				    res.redirect('/guifan/admin/yxfamily');
				})();
				
				
			}
			break;
		case "content_zhibo_list":
			var picObj = {};
	
			for(var i=0;i<req.files.length;i++){
				var ext = pathLib.parse(req.files[i].originalname).ext;
				var oldPath = req.files[i].path;
				var newPath = req.files[i].path + ext;
				
				fs.renameSync(oldPath,newPath)
				picObj[req.files[i].fieldname] = newPath;
			}
			
			
			var _update = function(){
				var updataFile;
				for(i in picObj){
					var obj = {
						key : i,
						value : '//'+req.headers.host+'/guifan/admin/'+picObj[i],
						id : req.body.mod_id
					};
					
					updataFile = getAllData.updateData.update_content_data(obj);
					
					
				}
				getAllData.updateData.update_content_data({
					key : 'title',
					value : req.body.title,
					id : req.body.mod_id
				});
				getAllData.updateData.update_content_data({
					key : 'descr',
					value : req.body.descr,
					id : req.body.mod_id
				});
				return updataFile;
			};
			
			var _add = function(){
				
				getAllData.insertData.insert_content_data({
					menuid : 8,
					title : req.body.title,
					descr : req.body.descr,
					pic1 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic1'],
					pic2 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic2'],
					pic3 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic3'],
					type1 : 5
				});
				
			};
			
			if(req.body.mod_id){//修改
				(async () => {
					var updataFile = await _update();
					//删除之前文件
					for(i in picObj){
						common.deleteFile(updataFile[i]);
					}
					//set log
				    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:3,type1:9});
				    
				    res.redirect('/guifan/admin/yxfamily');
				})();
			}else{				//添加
				if( !req.body.title || !req.body.descr || !picObj['pic1'] || !picObj['pic2'] || !picObj['pic3']){
					res.status(500).send('args error').end();
				}else{
					(async () => {
						await _add();
						
						//set log
					    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:3,type1:9});
				    
						res.redirect('/guifan/admin/yxfamily'); 
					})();
					
				}
			}
			break;
			
		default:
			break;
	}
	
		

	
});

module.exports = router;
