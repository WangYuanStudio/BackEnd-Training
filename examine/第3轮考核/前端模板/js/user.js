//注册
function register() {
	HiddenAll();
	$('.user_register').css('display', 'block');
	$('#position a').html('用户注册');
}

//登录
function login() {
	HiddenAll();
	$('.user_login').css('display', 'block');
	$('#position a').html('用户登录');	
}

//修改资料
function changeInfo() {
	HiddenAll();
	$('.user_changeInfo').css('display', 'block');
	$('#position a').html('修改资料');
}

//修改密码
function changePassword() {
	HiddenAll();
	$('.user_changePassword').css('display', 'block');
	$('#position a').html('修改密码');
}

//查看资料
function viewInfo() {
	HiddenAll();
	$('.user_showInfo').css('display', 'block');
	$('#position a').html('我的资料');
}

//查看我/他/她发布的新闻
function viewNews() {
	HiddenAll();
	$('.user_showNews').css('display', 'block');
	$('#position a').html('我的新闻');
}

//全部隐藏
function HiddenAll() {
	$('.user_login').css('display', 'none');
	$('.user_register').css('display', 'none');
	$('.user_changeInfo').css('display', 'none');
	$('.user_changePassword').css('display', 'none');
	$('.user_showInfo').css('display', 'none');
	$('.user_showNews').css('display', 'none');
}