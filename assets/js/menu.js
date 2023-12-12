// Code from Stack Overflow https://stackoverflow.com/questions/58193096/how-do-i-close-this-checkbox-menu-after-the-user-clicks-on-the-links-or-outside
var checkbox = document.querySelector( '#nav-toggle' );
var icon = document.querySelector( '#menuicon i' );
var listener = function( e ) {
  if( e.target != checkbox && e.target != icon ) {
    checkbox.checked = false;
    document.removeEventListener( 'click', listener );
  }
};

checkbox.addEventListener( 'click', function(){
  if( this.checked ) {
    document.addEventListener( 'click', listener );
  } 
});