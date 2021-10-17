$(document).ready(function () {
  $("input").keyup(function () {
      var value = $(this).val();
      if (value == "") {
          $(".result-list").html("");
      } else {
          $.ajax({
            type: $(".searchWp").attr("method"),
            url: $(".searchWp").attr("action"),
            data: $(".searchWp").serialize(),
           success: function (response) {     
                     $(".result-list").html(response);
            },
          });
      }
  });
});
