$(document).ready(function() {
  for (i=0;i<8000;i++) {
    $('body').append("<div class='square'></div>");
  }
})

$( document ).ready(function() {
  $('button').on('click', function() {
    var color = $('input').val();
    $('.brush').css('background-color', color);
  });
  $(document).on('keydown', function() {
    if (event.which === 13) {
      event.preventDefault();
      var color = $('input').val();
      $('.brush').css('background-color', color);
    }
    else {
    }
  });
  $('.square').on('mouseover', function() {
    var color = $('input').val();
    $(this).css('background-color', color);
  })
});
