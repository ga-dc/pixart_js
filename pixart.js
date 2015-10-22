$(".brush").css("position", "<inline-block>");
for (var i = 0; i < 3; i++) {
  $("form").after($('<div />', {
    "class": "brush",
  }))};
var allBrushes = $(".brush");
allBrushes.css("display", "inline-block");
var clickCounter = 0;
$(document).ready(function() {
  $("button").on("click", function(evt) {
    var whichBrush = $(".brush")[clickCounter];
    evt.preventDefault();
    colorSelected = $("input:text").val(); //This is correct.
    console.log("User input is: " + colorSelected);
    $(whichBrush).css("background-color", colorSelected);
    clickCounter = clickCounter + 1;
    if (clickCounter >= 3) {
      clickCounter = 0;
    };
  })
});
//Looks like I am not setting currentButton properly in here.
// $(document).ready(function() {
//   currentButton = $(".button")[0];
//   $(".brush").on("click", currentButton = $(".brush")[this.index]);
// });
$(document).ready(function() {
  function addColor() {
    return function(e) {
      //Defining an alternative colorSelected2 because I FAILed the Bonus. At least you can still paint ;(
      // var colorSelected2 = currentButton.css("background-color").val();
      //console.log(colorSelected2);
      var colorSelected2 = $("input:text").val();
      e.preventDefault;
      $(this).css("background-color", colorSelected2);
    };
  };
  for (var i = 0; i < 8000; i++) {
    $(".controls").after($('<div />', {
      mouseover: addColor(),
      "class": "square",
    }));
  }
});
//Code below is uncessesary as the style.css file already assigns these values
var allSquares = $(".square");
allSquares.css("width", 10 + "px");
allSquares.css("height", 10 + "px");
