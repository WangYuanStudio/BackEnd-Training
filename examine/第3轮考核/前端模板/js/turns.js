$(document).ready(function () {
    var currentIndex = 0;
    var DEMO;                                                                       //函数对象
    var currentID = 0;                                                              //取得鼠标下方的对象ID
    var pictureID = 0;                                                              //索引ID

    $("#ifocus_piclist li").eq(0).show();                                           //显示默认
    autoScroll();                                                                   //自动滚动

    //当鼠标移到上面时
    $("#ifocus_btn a").hover(function () {
        StopScrolll();                                                              //停止自动滚动
        $("#ifocus_btn a").removeClass("current")                                   //所有元素都设置成正常的样式
        $(this).addClass("current");                                                //鼠标指向的元素则设置特殊样式
        currentID = $(this).attr("id");                                             //取当前元素的ID
        pictureID = currentID.substring(currentID.length - 1);                      //取最后一个字符
        $("#ifocus_piclist li").eq(pictureID).fadeIn("slow");                       //显示当前元素
        $("#ifocus_piclist li").not($("#ifocus_piclist li")[pictureID]).hide();     //除了当前元素其他的元素全部隐藏
        $("#ifocus_tx li").hide();
        $("#ifocus_tx li").eq(pictureID).show();
    }, function () {
        //当鼠标离开对象的时候获得当前的对象的ID以便能在启动自动时与其同步
        currentID = $(this).attr("id");                                             //取当前元素的ID
        pictureID = currentID.substring(currentID.length - 1);                      //取最后一个字符
        currentIndex = pictureID;
        autoScroll();                                                               //恢复自动滚动
    });


    //自动滚动
    function autoScroll() {
        $("#ifocus_btn a:last").removeClass("current");
        $("#ifocus_tx li:last").hide();
        $("#ifocus_btn a").eq(currentIndex).addClass("current");
        $("#ifocus_btn a").eq(currentIndex - 1).removeClass("current");
        $("#ifocus_tx li").eq(currentIndex).show();
        $("#ifocus_tx li").eq(currentIndex - 1).hide();
        $("#ifocus_piclist li").eq(currentIndex).fadeIn("slow");
        $("#ifocus_piclist li").eq(currentIndex - 1).hide();
        currentIndex++; currentIndex = currentIndex >= 6 ? 0 : currentIndex;
        DEMO = setTimeout(autoScroll, 5000);
    }

    //停止自动滚动
    function StopScrolll()
    {
        clearTimeout(DEMO);
    }
});