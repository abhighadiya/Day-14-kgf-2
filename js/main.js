$(document).ready(function () {
  $(".trailer-btn").on("click", function () {
    $(".video-wrapper").addClass("show");
    $("body").css("overflow", "hidden");
  });
  $(".cross-btn").on("click", function () {
    $(".video-wrapper").removeClass("show");
    $("body").css("overflow", "auto");
    $(".video").get(0).currentTime = 0;
    $(".video").get(0).pause();
  });
});
