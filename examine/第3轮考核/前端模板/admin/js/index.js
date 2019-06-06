$(document).ready(function() {
	//初始化
	hideenAll()
	showNewsManagement();

	// //自动勾选复选框
	// $('.content-box tr').click(function(event) {
	// 	var obj = $(this).find('input[type="checkbox"]');
	// 	obj.attr('checked', !obj.attr('checked'));
	// 	// $(this).find('input[type="checkbox"]').attr('checked', 'true');
	// });

});

//隐藏全部视图
function hideenAll() {
	$('.add_category').css('display', 'none');
	$('#list_news').css('display', 'none');
	$('#list_share').css('display', 'none');
	$('#list_users').css('display', 'none');
	$('#list_category').css('display', 'none');
}

//全部去掉默认样式
function delDefaultStyle() {
	$('.checked-tab').attr('class', 'default-tab');
}

//显示“创建新分类”的窗口
function showWindow() {
	$('.add_category input[type="text"]').val('');
	$('.add_category').css('display', 'block');
}

//关闭“创建新分类”的窗口
function closeWindow() {
	$('.add_category').css('display', 'none');
}

//退出登录
function logout() {
	window.location.href = "login.html";
}

//显示“新闻管理”栏目
function showNewsManagement() {
	hideenAll();
	delDefaultStyle();
	$('#list_news').css('display', 'block');
	$('#menu_news').attr('class', 'checked-tab');

}

//显示“用户管理”栏目
function showUsersManagement() {
	hideenAll();
	delDefaultStyle();
	$('#list_users').css('display', 'block');
	$('#menu_users').attr('class', 'checked-tab');
}

//显示“分类管理”栏目
function showCategoryManagement() {
	hideenAll();
	delDefaultStyle();
	$('#list_category').css('display', 'block');
	$('#menu_category').attr('class', 'checked-tab');
}

//显示“发布新闻”栏目
function showShareNews() {
	hideenAll();
	delDefaultStyle();
	$('#list_share').css('display', 'block');
	$('#menu_share').attr('class', 'checked-tab');
}