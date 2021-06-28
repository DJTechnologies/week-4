$(function () {
  $(".carousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });

  //  testing
  // $(document).onready(function () {
  //   $("#reserveButton").onclick(function () {
  //     $("#reserve").toggle();
  //   });
  // });

  // $(document).onready(function () {
  //   $("#loginModal").onclick(reserveModalStart () {
  //     $("#login").toggle();
  //   });
  // });

  // function reserveModalStart() {
  //   $("#reservemodal").modal("show");
  // }

  // $("#reserve-button").click(reserveModalStart());
  // $('login-button').click(startLoginModal());

  // $('#reservemodal').on('shown.bs.modal')

  // $("#reserve-button").click(function () {
  //   $("#reserveModal").modal("show");
  // });
  // $("#login-button").click(function () {
  //   $("#loginModal").modal("show");
  // });

  $("#reserve-button").click(function () {
    $("#reserveModal").modal("show");
  });

  $("#login-button").click(function () {
    $("#loginModal").modal("show");
  });
});
