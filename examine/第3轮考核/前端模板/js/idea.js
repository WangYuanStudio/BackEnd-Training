$(document).ready(function() {
	//新窗口打开图片
	$('img').click(function(event) {
		var src = $(this).attr('src');
		window.open(src);
	});
});