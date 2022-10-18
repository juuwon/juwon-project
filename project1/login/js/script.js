$(function (){
    var tabAnchor = $('.tab_list .tab_item .tab_anchor'),
        tabContent = $('.tab_content');
    //링크를 클릭하면 할일
    tabAnchor.click(function(event){
        event.preventDefault();
        tabAnchor.removeClass('active');
        $(this).addClass('active');
        
        tabContent.hide();

        var $target =$(this).attr('href')
        console.log($target);
        $($target).show();
    });
});