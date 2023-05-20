$(document).ready(function () {
  $("#afisha-slider").slick({
    dots: true,
    // variableWidth: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendArrows: $("#afisha-slider-nav"),
    appendDots: $("#afisha-slider-dots"),
  });
});
