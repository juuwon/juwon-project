//skip menu
$("#skip > li  >a").on("click", function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: $(this.hash).offset().top - 80 }, 500);
});

//로딩 페이지
let Isloader = document.querySelector(".loading-wrap");
function Isloading() {
  setTimeout(function () {
    Isloader.classList.add("active");
  }, 4000);
}
Isloading();

//scroll 시 상단 nav 메뉴 고정
var fixed = $(".header-wrap").offset().top;

$(window).scroll(function () {
  var window = $(this).scrollTop();

  if (fixed <= window) {
    $(".header-top").addClass("fixed");
  } else {
    $(".header-top").removeClass("fixed");
  }
});

//home nav 메뉴 a 링크
$(".anchor").on("click", function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: $(this.hash).offset().top - 200 }, 500);
});

//home scroll btn scroll동작
$("#scrollBtn").on("click", function () {
  var offset = $("#about").offset();

  $("html,body").animate({ scrollTop: offset.top - 200 }, 700);
});

//탭메뉴
var tabBtn = $(".tab-menu > li");
var tabCont = $(".tab-content > div");
tabCont.hide().eq(0).show();
tabBtn.click(function (e) {
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  tabBtn.removeClass("active");
  target.addClass("active");
  tabCont.css("display", "none");
  tabCont.eq(index).css("display", "block");
});

// 토글 및 className 설정
$(document).ready(function () {
  $(".switch").click(function () {
    $("body").toggleClass("light");
  });
});

// 로컬스토리지에 theme 설정
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// theme 확인 후 theme 토글
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-dark");
    document.getElementById("logoImg").src = "./images/logo_white.png";
    $(".scroll").removeClass("active");
  } else {
    setTheme("theme-light");
    document.getElementById("logoImg").src = "./images/logo.png";
    $(".scroll").addClass("active");
  }
}
// 초기 로드 시 테마 설정 즉시실행함수
(function () {
  if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
})();
