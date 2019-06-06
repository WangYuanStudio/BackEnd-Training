$(document).ready(function() {
	$('#SendContent').keypress(function(event) {
		showWordsCount();
	});

	$('#SendContent').keyup(function(event) {
		showWordsCount();
	});

	$('#SendContent').keydown(function(event) {
		showWordsCount();
	});

	$('#SendContent').change(function(event) {
		showWordsCount();
	});

	function showWordsCount() {
		var length = $('#SendContent').val().length;				//获取文字长度
		$('#WordsCount').html(length);								//显示字数
		if(length > 200)
			$('#WordsCount').css('color', 'rgb(168, 0, 0)');		//设置成红色
		else
			$('#WordsCount').css('color', 'rgb(68, 68, 68)');		//设置成灰色
	}
});