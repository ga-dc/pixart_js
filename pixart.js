
var button = $('#set-color')
function handleClickEvent (e) {
  $('.brush').css ('background', $('input').val())
  e.preventDefault()
}
button.on ('click', handleClickEvent)

$(document).ready(function () {
    //var $newdiv = $('<div class="square" />').css ('background','red')
    for (var i = 0; i <= 8000; i++) {
        $newdiv = $('<div class="square" />').css ('background','red')
        $('body').append($newdiv);
    }
})

$('body').on('mouseover', function () {
  $('.square').css ('background', $('input').val())
})
