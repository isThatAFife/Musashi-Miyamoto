// Code from Stack Overflow https://stackoverflow.com/questions/58193096/how-do-i-close-this-checkbox-menu-after-the-user-clicks-on-the-links-or-outside
var checkbox = document.querySelector( '#nav-toggle' );
var icon = document.querySelector( '#menuicon i' );

/**
 * Set checked property to false when user clicks any element except the menu button. Remove event listener from document.
 */
var listener = function( e ) {
  if( e.target != checkbox && e.target != icon ) {
    checkbox.checked = false;
    document.removeEventListener( 'click', listener );
  }
};

/**
 * If checkbox is checked, add an event listener to the document.
 */
checkbox.addEventListener( 'click', function(){
  if( this.checked ) {
    document.addEventListener( 'click', listener );
  } 
});