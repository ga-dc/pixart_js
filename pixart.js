var brush = document.querySelector( ".brush" );

// I thought this works for both one and two of the commits?
// After looking around I could only find a jquery solution...
var setColorClick = function(){
    button.addEventListener("click" , function(evt){		    button.addEventListener("click" , function(evt){
    })
  };



// Thank you Mozilla, Doucment.creatElement() helped solve this one.
      var createDivs = function() {
   for (i = 0; i < 20; i) {
     var newDiv = document.createElement("div");
     newDiv.setAttribute("class" , "square");
     document.body.appendChild(newDiv);
     newDiv.addEventListener("click" , function(evt){
       evt.target.style.backgroundColor = "green";
     })
    }}
  }}
// does lines 20-22 even make sense doing it this way? or is it just something you get use to seeing after reading code a lot more?
