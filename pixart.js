let button = $('#set-color');
let inputSubmit = $('input');
let brushBox = $('.brush');
let htmlBody = $('body');
let canvasDiv = fillArray('<div class="square"></div>', 20);

htmlBody.append(canvasDiv);

$(".square").on("click", function () {
  $(this).css("background", "green");
});


function fillArray(value, len) {
  var a = [value];
  while (a.length * 2 <= len) a = a.concat(a);
  if (a.length < len) a = a.concat(a.slice(0, len - a.length));
  return a;
}

function changeColor() {
  let brushColor = $('#color-field').val();
  brushBox.css("background", brushColor);
}

button.click(changeColor);
inputSubmit.keydown(function(e) {
  if (e.which === 13) {
    e.preventDefault();
    changeColor();
  }
});

function changeBackgroundColor(){
  $("this").css("background", "green");
}
