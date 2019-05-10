const mysql = require('mysql');

const db = mysql.createPool({hose:'127.0.0.1',user:'root',password:'',database:'ued'});

module.exports = {
	getJson : {
		// 菜单表（品牌标识）
		get_json : function (query) {
			return new Promise(function(resolve,reject){
				db.query(query,(err,data)=>{
					if(err){
						console.error(err)
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data)
						
					}
				});
			})
		}
	
	},
	
	getData : {
		// 菜单表（品牌标识）
		menu_data : function (id) {
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM menu_list WHERE id=${id}`,(err,menu_data)=>{
					if(err){
						console.error(err)
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(menu_data)
						
					}
				});
			})
		},
		// 品牌组合
		brand_data : function (id) {
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM brand_list WHERE menuid=${id}`,(err,brand_data)=>{
					if(err){
						console.error(err)
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(brand_data);
					}
					
				});
			})
		},
		// 内容模板
		content_data : function(menuid,typeid){
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM content_list WHERE menuid=${menuid} AND type1=${typeid}`,(err,data)=>{
					if(err){
						console.error(err)
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data);
					}
					
				});
			})
		},
		// 秒拍客户端
		miaopaiAPP_data : function(type){
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM miaopaiAPP_list WHERE type=${type}`,(err,data)=>{
					if(err){
						console.error(err);
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data);
					}
				})
			})
		}
	},


	getModData : {
		menu_list_mod_data : function (id) {
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM menu_list WHERE id=${id}`,(err,mod_data)=>{
					if(err){
						console.error(err)
						res.status(500).send('database error').end();
						reject(err);
					}else{
						
						resolve(mod_data[0]);
						
					}
				});
			})
		},
		
		brand_list_mod_data : function (id) {
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM brand_list WHERE id=${id}`,(err,mod_data)=>{
					if(err){
						console.error(err)
						res.status(500).send('database error').end();
						reject(err);
					}else if( mod_data.length == 0 ){
						res.status(404).send('data not found').end();
					}else{
						resolve(mod_data[0]);
						
					}
				});
			})
		},
		
		//内容模板
		content_list_mod_data : function(menuid,typeid,modid){
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM content_list WHERE menuid=${menuid} AND type1=${typeid} AND id=${modid}`,(err,data)=>{
					if(err){
						console.error(err)
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data[0]);
					}
					
				});
			})
		},
		
		miaopaiaAPP_mod_data : function(id){
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM miaopaiAPP_list WHERE id=${id} `,(err,data)=>{
					if(err){
						console.error(err)
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data[0]);
					}
					
				});
			})
		}
	},

	delData : {
		del_brand_data :  function (id) {
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM brand_list WHERE id=${id}`,(err,data)=>{
					if(err){
						console.error(err)
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data[0]);
						db.query(`DELETE FROM brand_list WHERE id=${id}`,(err,data)=>{
							if(err){
								console.error(err)
								res.status(500).send('database error').end();
							}
						})
					}
				})
			})
		},  
		
		del_content_data :  function (id) {
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM content_list WHERE id=${id}`,(err,data)=>{
					if(err){
						console.error(err)
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data[0]);
						db.query(`DELETE FROM content_list WHERE id=${id}`,(err,data)=>{
							if(err){
								console.error(err)
								res.status(500).send('database error').end();
							}
						})
					}
				})
			})
		}, 
		
		del_miaopaiAPP_data :  function (obj) {
			return new Promise(function(resolve,reject){
				
				db.query(`DELETE FROM miaopaiAPP_list WHERE ${obj.key}=${obj.value}`,(err,data)=>{
					if(err){
						console.error(err)
						res.status(500).send('database error').end();
					}else{
						resolve(data[0]);
					}
				})
					
			})
		},           
	},
	
	updateData : {
		update_menu_data :  function (obj) {
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM menu_list WHERE id='${obj.id}'` ,(err,data)=>{
					if(err){
						console.error(err);
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data[0]);
						db.query(`UPDATE menu_list SET ${obj.key}='${obj.value}' WHERE id='${obj.id}'` ,(err,data)=>{
							if(err){
								console.error(err);
								res.status(500).send('database error').end();
							}
						});
					}
				});
			})
		} ,
		update_brand_data :  function (obj) {
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM brand_list WHERE id='${obj.id}'` ,(err,data)=>{
					if(err){
						console.error(err);
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data[0]);
						db.query(`UPDATE brand_list SET ${obj.key}='${obj.value}' WHERE id='${obj.id}'` ,(err,data)=>{
							if(err){
								console.error(err);
								res.status(500).send('database error').end();
							}
						}); 
					}
				}); 
			})
		},
		
		update_content_data :  function (obj) {
			return new Promise(function(resolve,reject){
				db.query(`SELECT * FROM content_list WHERE id=${obj.id} ` ,(err,data)=>{
					if(err){
						console.error(err);
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data[0]);
						db.query(`UPDATE content_list SET ${obj.key}="${obj.value}"  WHERE id=${obj.id} ` ,(err,data)=>{
							if(err){
								console.error(err);
								res.status(500).send('database error').end();
							}
						}); 
					}
				}); 
			})
		},
		
		update_log_data :  function (obj) {
			return new Promise(function(resolve,reject){
				db.query(`UPDATE log_list SET name="${obj.name}" , time=CURRENT_TIMESTAMP()  WHERE menuid=${obj.menuid} AND type1=${obj.type1}` ,(err,data)=>{
					if(err){
						console.error(err);
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data);
					}
				}); 
			})
		},
		
		update_miaopaiAPP_data :  function (obj) {
			return new Promise(function(resolve,reject){
				db.query(`UPDATE miaopaiAPP_list SET ${obj.key}="${obj.value}" , name="${obj.name}"  WHERE id=${obj.id} ` ,(err,data)=>{
					if(err){
						console.error(err);
						res.status(500).send('database error').end();
						reject(err);
					}
				}); 
			})
		},
		        
	},
	
	insertData : {
		insert_brand_data :  function (obj) {
			return new Promise(function(resolve,reject){
				db.query(`INSERT INTO brand_list (menuid, pic1, pic2, pic3) VALUE ( ${obj.menuid}, '${obj.pic1}', '${obj.pic2}',' ${obj.pic3}' )` ,(err,data)=>{
					if(err){
						console.error(err);
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data);
					}
				}); 
			})
		},
		
		insert_content_data :  function (obj) {
			return new Promise(function(resolve,reject){
				db.query(`INSERT INTO content_list (menuid, title, descr, pic1,pic2, pic3,type1) VALUE ( ${obj.menuid}, '${obj.title}', '${obj.descr}', '${obj.pic1}','${obj.pic2}', '${obj.pic3}', ${obj.type1} )` ,(err,data)=>{
					if(err){
						console.error(err);
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data);
					}
				}); 
			})
		},
		
		insert_miaopaiAPP_data : function(query){
			return new Promise(function(resolve,reject){
				db.query(query ,(err,data)=>{
					if(err){
						console.error(err);
						res.status(500).send('database error').end();
						reject(err);
					}else{
						resolve(data);
					}
				}); 
			})
		}
		          
	}
	
}
