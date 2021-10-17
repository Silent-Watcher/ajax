$(document).ready(function () {
  $("input").keyup(function () {
    var value = $(this).val();
    if (value == "") {
      $(".result-list").html("");
      $(".searchInput").removeClass(" activeSearch"); //
    } else {
      $(".searchInput").addClass(" activeSearch"); //
      $.ajax({
        type: $(".searchWp").attr("method"),
        url: $(".searchWp").attr("action"),
        data: $(".searchWp").serialize(),
        success: function (response) {
          $(".result-list").html(response);
        },
        error: function (response) {
          console.log(response);
        },
      });
    }
  });
});
