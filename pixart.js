$(document).ready();
var colorInput;
// Commit 1
// When I click the "Set Color" button, it should change the color of the "brush" box to the color
// I specify in the input field. (Hint: You will need to use event.preventDefault() somewhere in your code.)
// Use jQuery to select the element, and addEventListener to handle clicks
// $("body")[0].addEventListener...
function changeColor(){
  this.style.backgroundColor = colorInput;
};

function changeSquareColor(){
  event.preventDefault();
  colorInput =$("input").val();
  $(".brush").css("background",colorInput);

};

$("#set-color").on("click",changeSquareColor);
// Commit 2
// The same thing should happen when I press the enter key from inside the input field
$("#set-color").keypress(changeSquareColor);

// Commit 3
// Create 20 divs of the "square" class and append them to the body
// Hint: use .append()
var objToClone = $(".controls");

for (var i =0;i<20;i++){
  objToClone.append('<div class = "square"></div>');
  document.getElementsByClassName("square")[i].addEventListener("mouseover",changeColor);
  console.log(i);
  }; // note that issue with it in terms of it going through it.


// // Commit 4
// // Add functionality so that when I click on each "square",
//  it changes the color of that individual square to "green"
//
// // Hint: either add the event listener while creating the
//  squares, or listen for events on the body element




// Commit 5s
// Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.





// Commit 6
// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// Modify your code so that you are creating 8000 divs instead of 20.
// Change the event that changes your box colors from 'click' to 'mouseover'
// Paint a picture!
