$(document).ready(function(){

  var setColor = $('#set-color');

  setColor.on("click", changeColor);

  function changeColor(){
    $(".brush").css("background", $('#color-field').val());
    event.preventDefault();
  }

})
