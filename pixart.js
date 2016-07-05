$(document).ready(function(){
  console.log("I'm ready");

    var button = $("button");

    button.on("click", changeColorBox);
});
    function changeColorBox(evt){
      //Define input within the function to avoid error
      var input = $("input");

      evt.preventDefault();
      //.val() is for input fields
      var color = input.val();
      console.log(color);

      $(".brush").css("background", color)
    }
