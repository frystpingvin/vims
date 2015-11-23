// Mobile navigation
$( "#navToggle" ).click(function() {
  $( "#mobileNav" ).toggleClass( "active" );
  $( this ).toggleClass( "active, close" );
});

$.validate({
  form : '#registrationForm'
});

$('#registrationForm').ajaxForm(function() { 
  $('#message').addClass('success').fadeIn().html('<h2>Tack för din köanmälan</h2>'); 
  $('#registrationForm').fadeOut();//Hide the form 
});