var btn = document.getElementById('tab_btn'),
    tabContent =document.getElementsByClassName('tab_content');

btn.addEventListener('click',function(){
    tabContent.show()
});