//侧边栏控制选中后的状态
function checked(img_name){
	$('.line_1').on('click',function(e){
	$('.treeview-menu').find('li').css('background-color','#2e2e3e');
	$('.treeview-menu').find('li').find('a').css('color','#B1B5C1');
	var index=$('.line_1').index($(this));
	$.cookie('left_page',index);
	window.parent.frames.mainFrame.location.reload();
	var index_add=$('.line_1').index($(this))+1;
    $('.line_1').find('.leftT').css('color','#FFFFFF');
    for(var i=1;i<=$('.line_1').length;i++){
    	   $('.line_1').eq(i-1).find('img').eq(0).attr('src',img_name+i+'_nochecked.png')
    }
    $(this).find('.leftT').css('color','#00A6F5');
    $(this).find('img').eq(0).attr('src',img_name+index_add+'_checked.png');
})
}
