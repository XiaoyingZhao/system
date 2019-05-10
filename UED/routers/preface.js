const express = require('express');
var getAllData = require("../common/getdata");
var router = express.Router();

router.get("/",(req,res,next)=>{
	switch (req.query.page){
		case 'miaopaiapp_list':
			switch(req.query.act){
				case 'mod':
					var data={};
					(async () => {
					    data.preface_mod_data = await getAllData.getModData.miaopaiaAPP_mod_data(req.query.id);
					    
					    data.preface_data = await getAllData.getData.miaopaiAPP_data(1);
					    
					    res.render('web/preface', {data});
					})();
					
				break;
				case 'del':
					(async () => {
					    await getAllData.delData.del_miaopaiAPP_data({
					    	key:"id",
					    	value:req.query.id
					    });
					    
						res.redirect('/guifan/admin/miaopaiapp/preface');
					})();
					
				break;
				default:
				break;
			}
		break;
		default:
			var data = {};
			(async()=>{
				data.preface_data = await getAllData.getData.miaopaiAPP_data(1);
				
				res.render('web/preface',{data});
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
			var _add = function(){
				var obj = {
					upid : 0,
					type : 1,
					title : req.body.title,
					descr : req.body.descr,
					name : Cookies.uxc_username
				};
				getAllData.insertData.insert_miaopaiAPP_data(`INSERT INTO miaopaiAPP_list (upid, type, title, descr, name, time) VALUE ( ${obj.upid},'${obj.type}', '${obj.title}', '${obj.descr}', '${obj.name}', CURRENT_TIMESTAMP() )`);
			};
			
			if(req.body.mod_id){//修改
				(async()=>{
					await _update();
					res.redirect('/guifan/admin/miaopaiapp/preface');
				})()
			}else{				//添加
				(async()=>{
					await _add();
					res.redirect('/guifan/admin/miaopaiapp/preface');
				})()
			}
		break;
		default:
		break;
	}
});

module.exports = router;