//a링크 막기
$('a').click(function(event){
    event.preventDefault();
});

/* 1뎁스 메뉴 */
let atrue = true;
$(".menu_item>a").click(function(){

    if(atrue==true){
        $(this).next('.sub_wrap').stop().slideDown(1000);
        $(this).parent().addClass('on')
        atrue=false;
    }else{
        $(this).next('.sub_wrap').stop().slideUp(1000);
        $(this).parent().removeClass('on')
        atrue=true;
    }
});

/* mobile han 메뉴 */
$('.app-btn').click(function(){
    $('.bar') .toggleClass('addAppBtn');
    $('.mobile-nav') .slideToggle(1000);
});

