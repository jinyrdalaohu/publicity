
$(function () {


    //滚动至第二屏打开弹窗
    $(window).scroll(function () {
        
        var scrollTop = $(this).scrollTop();
        if (scrollTop < 650) {
            $(".right-fix").css("display","none")
        } else if (scrollTop > 650) {
            $(".right-fix").css("display","block")
        };
    });
    $(".advantage li .li_wrap").on("mouseover",function(){
        $(this).find(".img_name").hide();
        $(this).find(".mask").show();
    })
    $(".advantage li .li_wrap").on("mouseout",function(){
        $(this).find(".img_name").show();
        $(this).find(".mask").hide();;
    })
})
