// var color = $(this.input);
//
// function setColor(){
//   $(".brush").css("background", $(this.input));
// }
//
// color.on('submit', setColor);
//
// var box {
//     this.brush:$(".brush"),
//     this.input:$("#color-field"),
// }
var input = $("#color-field");
var brush = $(".brush");
var brushHue = undefined;
var container = "";

function setColor(){
    brushHue=input.val();
    brush.css("background", brushHue);
}

$('#set-color').click(setColor)
$('#set-color').keydown(setColor)

// function changeBackground(){
// for (i=0; i<=20; i++) {
//   ("<div class= 'square'>").appendTo("<div class= 'controls'>")
// }
// }

for (var x = 0; x <= 100; x++){
    container += '<div class="controls">';
    for (var y = 0; y <= 100; y++){
        container += '<div class="square"></div>';
    }
    container += '</div>';
}
$('.controls').append(container);

$('#set-color').click(function(event) {
  event.preventDefault();
  $("<div>")
    .append("default " + event.type + " prevented")
    .appendTo("#log");
});







// .bind(box)
