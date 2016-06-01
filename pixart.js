/*
<h1>Pixel Art!</h1>
<div class="controls">
  <form id="form">
    <input type="text" id="color-field"></input>
    <button id="set-color">Set Color</button>
  </form>
  <div class="brush"></div>
</div>
 */

function initPixelArt() {

  // Get references to the elements.
  var $colorField = $( '#color-field' );
  var $button     = $( '#set-color' );
  var $brush      = $( '.brush' );

  // Add click listener on the "Set Color" button.
  $button.on( 'click', function( evt ) {

    // Disable the button's default behavior.
    evt.preventDefault();

    // Set the colot of "brush" box to the color that is specified in the input field.
    $brush.css( 'background', $colorField.val() );
  });


  // The same thing should happen when I press the enter key from inside the input field
  // Listen for the enter key press.
  $( 'body' ).on( 'keyup', function( evt ) {
    if ( evt.keyCode == 13 ) {
      // Simulate clicking on the submit button.
      $button.trigger( 'click' );
    }
  });
}

$( document ).ready( function(){
  initPixelArt();
});
