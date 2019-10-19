console.log(" -----    Animation Script is Working    -----");

var canRun = true;
$(document).ready(function () {
  console.log("ready!");


  // if ($(window).width() < 801) {
    $('.humberg-menu').on('click', function () {
      $('nav').toggleClass('nav-hide');
      $('.humberg-menu').toggleClass('humberg-x');
    });
    $('nav li').on('click', function () {
      $('nav').toggleClass('nav-hide');
      $('.humberg-menu').toggleClass('humberg-x');
    });

    $('.humberg-modal').on('click', function () {
      $('.modal').removeClass('modal-show');
      console.log("working");
      $('.modal').addClass('modal-hidden');
    });
    $('.modal-btn').on('click', function () {
      console.log("working-show");
      $('.modal').addClass('modal-show');
      $('.modal').removeClass('modal-hidden');
     
    });


  // }
});
$(document).on('scroll', function () {
  if ($(document).scrollTop() > 20) {
    $('header').addClass('shrink-header');
  } else {
    $('header').removeClass('shrink-header');
  }


  // $('.test').html($('.proj-2').offset().top - $(window).scrollTop());


  //SCROLL TO TOP BUTTON
  // if ($(document).scrollTop() > 500) {
  //   $('.top').addClass('top-show');

  //   // $(".top").click(function () {
  //   //   $('html, body').animate({
  //   //     scrollTop: 0
  //   //   }, 800);
  //   //   return true;
  //   // });

  // } else {
  //   $('.top').removeClass('top-show');
  // }


});
  

function mailTo() {
  location.href("mailto:arnoldcliff98@gmail.com?subject=hello&body=fggf", '_self');
}
