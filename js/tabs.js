$(document).ready(function () {
  $("#tab-1").on("click", function () {
    $(".chrono__nav-item").removeClass("active");
    $(".chrono__item").hide(0);

    $("#tab-1").addClass("active");
    $("#tab-item-1").slideDown();
  });

  $("#tab-2").on("click", function () {
    $(".chrono__nav-item").removeClass("active");
    $(".chrono__item").hide(0);

    $("#tab-2").addClass("active");
    $("#tab-item-2").slideDown();
  });

  $("#tab-3").on("click", function () {
    $(".chrono__nav-item").removeClass("active");
    $(".chrono__item").hide(0);

    $("#tab-3").addClass("active");
    $("#tab-item-3").slideDown();
  });
});
