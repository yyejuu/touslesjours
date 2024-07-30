$(function () {

  //nav hover
  $('header nav>ul.gnb>li').hover(function () {
    $(this).find('ul.sub').stop().slideDown();
  }, function () {
    $(this).find('ul.sub').stop().slideUp();
  });

  /* aos */
  $(document).ready(function () {
    AOS.init();
  });

    let nav
  $('.fixed').click(function (e) {
    e.preventDefault();
    $selector = $(this).children('a').attr('href')
    nav = $($selector).offset().top;
    $('html,body').animate({
      scrollTop: nav,
    }, 500);
  });
});
