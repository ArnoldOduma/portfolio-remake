console.log(" -----    Animation Script is Working    -----");

var canRun = true;
$(document).ready(function () {

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

  $(document).on('click', '.modal-btn',function () {
    console.log("working-show");
    $('.modal').addClass('modal-show');
    $('.modal').removeClass('modal-hidden');
  });

});

$(document).on('scroll', function () {
  if ($(document).scrollTop() > 20) {
    $('header').addClass('shrink-header');
  } else {
    $('header').removeClass('shrink-header');
  }

});

function myScale(arg) {
  var allArg = 15;
  for(i=1;i<=allArg;i++){
    if (arg == i) {
      $("."+i).addClass('myScale');
    }else{
      $("."+i).removeClass('myScale');
    }
  }
}
