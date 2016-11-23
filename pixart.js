
let obj = {selColor: ""};

$('form').on('submit', function(e){
  e.preventDefault();
  console.log('form submitted');
  var input = $('input').eq(0).val();
  console.log(input);
  $(".brush").css("background-color",input);
  obj.selColor = input;
});

for (let i=0;i<20;i++) {
  $("body").append("<div class='square'></div>");
}

$(".square").on("click", function() {
  $(this).css("background-color",obj.selColor);

});
