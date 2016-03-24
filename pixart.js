var setColorButton = document.querySelector("#set-color");
var brushDiv = document.querySelector("div.brush");

function changeColor(){
  var color = document.getElementById("color-field").value;
  event.preventDefault();
  brushDiv.style.background = color;
  console.log("pizza")
};

setColorButton.addEventListener("click" || "compositionend", changeColor);

for (i=0; i<=20; i++){
var newDiv = document.createElement("div");
newDiv.className = 'square';
newDiv.innerHTML = "";
document.body.appendChild(newDiv);
newDiv.addEventListener("click", changeColor)
}
