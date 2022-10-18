$('.app-btn').click(function(){
    $('.bar') .toggleClass('addAppBtn');
    $('.mobile-nav') .slideToggle(1000);
});

/* news slide */
const newsBanner=$('.banner-title-right .news-wrap');
let current=0;
let newsInterval;  /* 제어 */

newsSlide();
function newsSlide(){
    newsInterval=setInterval(function(){
        let prev=newsBanner .eq(current);        /* eq는 순번 */
        newsMove(prev, 0, '-100%')               /* %는 '' 로감싸야함*/
        current++;/* ++은 1씩 증가 */
        if(current==3){current=0}/* =대입 ==같다 */
        let next=newsBanner.eq(current);
        newsMove(next, '100%', 0)
    },1000);
}
function newsMove(tg, start, end){
    tg.css("top", start).stop().animate({top: end},500)
}
$('.banner-title-right .news-wrap').hover(function(){
    clearInterval( newsInterval);
},function(){
    newsSlide();
});

//버튼
const buttonRadius=$('.btn li');
const line=$('.template-line .title li');

buttonRadius.click(function(){
    buttonRadius.removeClass('on');
    $(this).addClass('on');
    let lines=$(this).index();
    //console.log(lines) 순번 알기
    line.removeClass('on');
    line.eq(lines).addClass('on');//순번
});

//배너 슬라이드
const slideBanner=$('.bannerArea .area'),
      slideList=$('.bannerArea .area li')
      slideWidth=slideList.width();
let setIntervalBn;

bannerSlide();//함수는 호이스팅이 일어남
function bannerSlide(){
    setIntervalBn=setInterval(function(){
        slideBanner.stop().animate({left:-(slideWidth + 15)},500,function(){
            $('.bannerArea .area li:first').insertAfter('.bannerArea .area li:last');
            slideBanner.css({left:0});
        });//스탑매서드
    },2000);
};
function rightBtn(){
        slideBanner.stop().animate({left:-(slideWidth + 15)},500,function(){
            $('.bannerArea .area li:first').insertAfter('.bannerArea .area li:last');
            slideBanner.css({left:0});
        });//스탑매서드
}
function leftBtn(){
        $('.bannerArea .area li:last').insertBefore('.bannerArea .area li:first');
        slideBanner.css({left: -(slideWidth + 15)}).stop().animate({left:0},500);
}

$('#banner .container').hover(function(){
    clearInterval(setIntervalBn)
},function(){
    bannerSlide();
});
$('.bannerRightBtn').on('click',function(){
    rightBtn();
})
$('.bannerLeftBtn').on('click',function(){
    leftBtn();
})

//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
      },
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        480: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        // when window width is >= 480px
        720: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        980: {
          slidesPerView: 3.5,
          spaceBetween: 40
        }
      }
  });

  /* slickBanner */
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    mode: 'fade'
  });
      