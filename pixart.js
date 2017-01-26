$(document).ready(function() {
  var button = $('button');
  var textField =  $("#color-field");
  console.log(textField);

  button.on("click", setColor);
  textField.on('keyPress', setColorKeyboard);

  spawnSquares();

  $('.square').on("mouseover", greenSquare);

  function greenSquare(event) {
    //event.target.css({"background-color":"green"});
    var inputColor = textField.val();
    $(this).css({"background-color":inputColor});
  }

  function setColorKeyboard(event) {
    event.preventDefault();
    key = event.which();
    if (key === 13) {
      var inputColor = textField.val();
      $(".brush").css('background-color', inputColor);
    }
  }

  function setColor(event) {
    event.preventDefault() //event automatically passed?
    var inputColor = textField.val();
    $(".brush").css('background-color', inputColor);
  }

  function spawnSquares() {
    body = $("body");
    div = '<div class="square"></div>';
    for (var i = 0; i < 8000; i++) {
      body.append(div);
    }
  }
});

  //  i just want to remember this wasnt the way.
  // $("#set-color").click(function(event) {
  // event.preventDefault();
  // var inputColor = $('#color-field').val();
  // console.log(inputColor);  //sets properly
  // $(".brush").css({background-color: inputColor});
  // })
