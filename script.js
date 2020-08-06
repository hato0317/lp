$(function () {
  $(".often-questions li").on("click", function () {
    $(this).next().slideToggle();
    $(".fa-chevron-down", this).toggleClass("fa-chevron-down2");
  });
}); //答えの表示・非表示

$(function () {
  $(".active").toggle();
}); //答えをデフォルト非表示

$(function () {
  var topbtn = $(".topbtn");
  topbtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      topbtn.fadeIn();
    } else {
      topbtn.fadeOut();
    } //if
  }); //iffunction
  topbtn.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
  });
}); //function

$(function () {
  $(".skype-left").on("click", function () {
    $(this).next().slideToggle();
    $(".skype-down", this).toggleClass("skype-down2");
  }); //ここが課題
}); //skypeの表示・非表示
