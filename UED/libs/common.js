const crypto = require('crypto');
const fs = require('fs');

module.exports = {
	DM5_SUFFIX:'SDW$@oipmmfk(pioikjhgfhj.kdjDFSDFGFHFS',
	md5: function(str){
		var obj = crypto.createHash('md5');
		obj.update(str);
		return obj.digest('hex');
	},
	deleteFile : function(path){
		var curPath = "./static/upload/"+path.split('/upload/')[1];
		fs.exists(curPath,function(exists){
			if(exists){
				fs.unlink(curPath,function(err){
					if(err){
						throw err;
					}
				});
			}
		})
        
	}
}