var button = document.querySelector("button");
var input = document.querySelector("input");
var color_field = document.querySelector("#color-field");
var brush = document.querySelector(".brush");



button.addEventListener("click", grabInputInfo);
color_field.addEventListener("keyup", function(e){
  if(e.keycode === 13){
  brush.style.background = color_field.value;
  }
});
//I want to pull information from input.
function grabInputInfo(){
  event.preventDefault();
  brush.style.background = color_field.value;
}

for(i=0; i<20; i++){
  //create an element.
  var div = document.createElement("div");
  //put className to div
  div.className = "square";
  //append new element to body
  document.body.appendChild(div);
}
