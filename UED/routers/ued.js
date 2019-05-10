const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const pathLib = require('path');
const common = require('../libs/common');

var router = express.Router();


var getAllData = require("../common/getdata");

router.get('/', (req, res, next)=>{
	
	switch (req.query.page){
		
		case 'menu_list':
			switch (req.query.act) {
				case 'mod':
					var data={};
					(async () => {
					    data.menu_list_mod_data = await getAllData.getModData.menu_list_mod_data(req.query.id);
					    
					    data.menu_data = await getAllData.getData.menu_data(5);
					    data.brand_data = await getAllData.getData.brand_data(5);
			    		// data.content_office_data = await getAllData.getData.content_office_data(1,1);
					    
					    res.render('web/ued', {data});
					})();
					
					
					break;
				default:
					break;
			}
			break;
		case 'brand_list':
			switch (req.query.act) {
				case 'mod':

					var data={};
					
					(async () => {
						// 修改内容
					    data.brand_list_mod_data = await getAllData.getModData.brand_list_mod_data(req.query.id);
					    
					    // 其他显示内容
					    data.menu_data = await getAllData.getData.menu_data(5);
					    data.brand_data = await getAllData.getData.brand_data(5);
					    
					    res.render('web/ued', {data});
					})();
					
					
					break;
				case 'del':
					(async () => {
					    var deleteFile = await getAllData.delData.del_brand_data(req.query.id);
					    if ( deleteFile.pic1 !== null && deleteFile.pic1 !== 'undefined' && deleteFile.pic1 !== ''){
				    		common.deleteFile(deleteFile.pic1);
					    }
					    if(deleteFile.pic2 !== null && deleteFile.pic2 !== 'undefined' && deleteFile.pic2 !== ''){
				    		common.deleteFile(deleteFile.pic2);
					    }
					    if(deleteFile.pic3 !== null && deleteFile.pic3 !== 'undefined' && deleteFile.pic3 !== ''){
				    		common.deleteFile(deleteFile.pic3);
					    }
					    res.redirect('/guifan/admin/ued');
					})();
					break;
			}
		
			break;
		default:
			var data={};
			
			(async () => {
			    
			    data.menu_data = await getAllData.getData.menu_data(5);
			    data.brand_data = await getAllData.getData.brand_data(5);
			    res.render('web/ued', {data});
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
		
		
		case "menu_list":
			var ext = pathLib.parse(req.files[0].originalname).ext;
			var oldPath = req.files[0].path;
			var newPath = req.files[0].path + ext;
			
			fs.renameSync(oldPath,newPath);
			
			if(req.body.mod_id){//修改
				var obj = {
					key : 'logo',
					value : '//'+req.headers.host+'/guifan/admin/'+newPath,
					id : req.body.mod_id
				};
				(async () => {
				    var updataFile = await getAllData.updateData.update_menu_data(obj);
				    //删除之前文件
				    common.deleteFile(updataFile.logo);
					//set log
				    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:5,type1:1});
				    
				    res.redirect('/guifan/admin/ued');
				})();
						
			}
			
			
			break;
		case "brand_list":
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
					
					updataFile = getAllData.updateData.update_brand_data(obj);
					
				}
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
				    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:5,type1:2});
				    
				    res.redirect('/guifan/admin/ued');
				})();
				
			}else{				//添加
				
				if(!picObj['pic1'] || !picObj['pic2'] || !picObj['pic3']){
					res.status(500).send('args error').end();
				}else{
					var obj = {
						menuid : 5,
						pic1 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic1'],
						pic2 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic2'],
						pic3 : '//'+req.headers.host+'/guifan/admin/'+picObj['pic3']
					};
					
					(async () => {
						await getAllData.insertData.insert_brand_data(obj);
						//set log
					    await getAllData.updateData.update_log_data({name:Cookies.uxc_username,menuid:5,type1:2});
					    
						res.redirect('/guifan/admin/ued'); 
					})();
					
				}
				
			}
			break;
		default:
			break;
	}
	
		

	
});

module.exports = router;
