// var colorField = document.getElementById("color-field");

var colorInput;
//button=setColor//
// var button = $("#set-color")

//funtion to understand form input value?

$("#set-color").on("click", setColor) //when the button is clicked, do function setColor
$("#set-color").keypress(function(e) {
  if(e.which === 13) {
    setColor();
  }
});

//when the button is clicked, the box should change color to match value of input field
function setColor(){
  event.preventDefault();
  //needs to understand the value of the color input.
  colorInput = $("#color-field").value;
  var brushBox = $(".brush").css("background-color");
  function changeBrushBox() {
    brushBox = $(".brush").css("background-color", colorInput);
  }
}

function copyBrushBox(brushBox) {
  for (var i = 1; i <=20; i++) {
    $(".brush").append($(".brush"))
  }
}

copyBrushBox(20);
