//메인 배너
$(function(){
    var slides = $('.bg-slide .slide_item'),
        dots = $('.visual_dots .slick>button')
        slideCount = slides.length,
        slideDots = dots.length,
        currentIndex = 0,

        slides.eq(currentIndex).fadeIn();

        var timer = setInterval(showNextSlide, 5000);

        showNextSlide()
        function showNextSlide(){
            
            var nextIndex = (currentIndex + 1) % slideCount;

            slides.eq(currentIndex).fadeOut();
            slides.eq(nextIndex).fadeIn();
            dots.eq(currentIndex).removeClass('active');
            dots.eq(nextIndex).addClass('active')
            currentIndex = nextIndex;


           //console.log(nextIndex);
        };
        let a=true;
        $('.visual_auto').click(function(){
           if(a==true){
            clearInterval(timer);
            $('.visual_auto').addClass('play')
            a=false;
           }else{
            timer = setInterval(showNextSlide, 5000);
            $('.visual_auto').removeClass('play')
            a=true
           };
        });
        dots.click(function(){
            var tg=$(this),
                i=tg.index();
            
            dots.removeClass('active')
            tg.addClass('active')
            if(currentIndex>i){
                showNextSlide(i);
            };
        });
});
