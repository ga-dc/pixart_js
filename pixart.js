$(document).ready(function(){

var button = $("button");
var brush = $(".brush");
// var lilSquare = $(".square")
// var div = $("<div/>").addClass("square")
// var handleClickEvent = function(e){
//   e.preventDefault();
// $("body").on("click", "div", function() {
//   this.css("background", "green")}
// );



button.on("click", function(e) {
  // var color = $("#form").submit();
  e.preventDefault();
});

// lilSquare.on("click," function() {
//   this.css("background", "green")
//
// })


  button.on("click", function() {
    var color = $( "input" ).val();
    brush.css("background", color);
  })

function changeGreen() {
  $(this).css("background", $( "input" ).val());
}

$("body").on("mouseover", ".square", changeGreen);


var i = 0;
do {
  $("body").append('<div class="square"></div>');
  i++;}
  while (i < 8000);









})
