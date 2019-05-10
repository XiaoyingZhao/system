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
					    data.component_library_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    data.component_library_data = await getAllData.getData.miaopaiAPP_data(10);
					    
					    res.render('web/component-library', {data});
					})();
					
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
					    
						res.redirect('/guifan/admin/miaopaiapp/component-library');
					})();
					
				break;
				default:
				break;
			}
		break;
		default:
			var data = {};
			(async()=>{
				data.component_library_data = await getAllData.getData.miaopaiAPP_data(10);
				
				res.render('web/component-library',{data});
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
		case 'miaopaiapp_list':
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
			var _add = function(){
				var obj = {
					upid : 0,
					type : 10,
					title : req.body.title,
					img1 : '//'+req.headers.host+'/guifan/admin/'+newPath,
					name : Cookies.uxc_username
				};
				getAllData.insertData.insert_miaopaiAPP_data(`INSERT INTO miaopaiAPP_list (upid, type, title, img1, name, time) VALUE ( ${obj.upid},'${obj.type}', '${obj.title}', '${obj.img1}', '${obj.name}', CURRENT_TIMESTAMP() )`);
				
			};
			
			if(req.body.mod_id){//修改
				(async()=>{
					await _update();
					res.redirect('/guifan/admin/miaopaiapp/component-library');
				})()
			}else{				//添加
				(async()=>{
					await _add();
					res.redirect('/guifan/admin/miaopaiapp/component-library');
				})()
			}
		break;
		default:
		break;
	}
});

 module.exports = router;