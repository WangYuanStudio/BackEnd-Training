var allMate={
	addCL:function(){
		$('.choiceContainer').on('click',function(e){
			$(this).find('.ichocie').click();
			$(this).find('.cchocie').click();
		});
	},
	addCL:function(){
		$('.ichocie').on('click',function(e){
			$('.ichocie').parent().find('.choice').removeClass('c');
			$(this).parent().find('.choice').addClass('c');
		});
		$('.cchocie').on('click',function(e){
			if ($(this).parent().find('.lchoice').attr('class')=='lchoice c') {
				$(this).parent().find('.lchoice').removeClass("c");
			}else{
				$(this).parent().find('.lchoice').addClass("c");
			}
		});
	}
}
allMate.addCL();
