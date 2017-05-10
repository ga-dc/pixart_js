/*### Commit 1

* When I click the "Set Color" button, it should change the color
of the "brush" box to the color I specify in the input field.
* Use jQuery to select the element and add an event listener

> **HINT:** You will notice that the page refreshes whenever
you click the button. You need to prevent this from happening
using a method you have not used before. Google "javascript
event prevent default". You can also reference [this portion]
(https://github.com/ga-wdi-lessons/js-events-callbacks#event-defaults-405---410-5-minutes)
of the Events & Callbacks lesson plan.
*/

var input = $("input")
var button = $("button")
function changeBrushBoxColor(){
$(".square").css("background", "");
}
button.on("click", changeBrushBoxColor());

//prevent refresh code
$("button").click(function(event) {
  event.preventDefault();
  alert("Color Changed!");
});
