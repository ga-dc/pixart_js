$(document).ready(function() {

  $("button").on("click", colorCollector);

  function colorCollector(evt) {
    evt.preventDefault();
    var color = $("input").val();
    $(".brush").css("background", color);
    }

  for (var i = 0; i <= 20; i++) {
    $("body").append("<div class='square'></div>")
  }

})
