//a링크 막기
$('a').click(function(event){
    event.preventDefault();
});


/* 1뎁스 메뉴 */
let atrue=true;
$(".menu_item>a").click(function(){

   if(atrue==true){
    $(this).next('.depth2_wrap').stop().slideDown(0);
    $(this).parent().addClass('m1')
    atrue=false;
   }else{
    $(this).next('.depth2_wrap').stop().slideUp(0);
    $(this).parent().removeClass('m1')
    atrue=true;
   }
});

/* 2뎁스 메뉴 */
$('.depth2_list>.depth2_item>a').mouseover(function(){
    $(this).addClass("active")
}).mouseout(function(){
    $(this).removeClass("active")
});

/* 3뎁스 메뉴 이미지*/
$('.depth3_item').eq(0).find('.prdt_main').show();

$('.depth3_item > a').mouseover(function(){
    $(this).next().show(1).addClass('on')
}).mouseout(function(){
    $(this).next().hide(1).removeClass('on')
});

