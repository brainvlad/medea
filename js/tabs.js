$(document).ready(function () {
  $("[data-tab]").on("click", function () {
    const index = $(this).attr("data-tab");
    $(this).siblings("[data-tab]").removeClass("active");
    $(this).addClass("active");

    $(`[data-tabitem=${index}]`).siblings("[data-tabitem]").hide(0);
    $(`[data-tabitem=${index}]`).slideDown();
  });
});
