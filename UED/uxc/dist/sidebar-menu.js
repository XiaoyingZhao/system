$(function(){
	$('.treeview-menu').find('li').on('click',function(){
		  for(var i=0;i<$('.treeview-menu').find('li').length;i++){
		  	    $('.treeview-menu').find('li').eq(i).css('background-color','#2e2e3e');
		  	    $('.treeview-menu').find('li').eq(i).find('a').css('color','#B1B5C1');
		  }
		  $(this).css('background-color','#1D1D2C');
		  $(this).find('a').css('color','#00A6F5');
	})
	//控制下拉三角向上向下
	$('.line_1').on('click',function(e){
		if($(this).parent().find('.treeview-menu').css('display')=='block'){
			$(this).next('.treeview-menu').hide();
	    	    $(this).find('.pull-right').removeClass('fa-sort-up');
	    	    $(this).find('.pull-right').addClass('fa-sort-down');
	    	    $(this).find('.pull-right').css('margin-top','-3px')
	    	    
	    }else{
	    	     $(this).next('.treeview-menu').show();
	    	     $(this).find('.pull-right').removeClass('fa-sort-down');
             $(this).find('.pull-right').addClass('fa-sort-up');
		    	 $(this).find('.pull-right').css('margin-top','3px')
	    }
	})
})