
/* -------- _System/assets/js/form.js -------- */ 

$.validate({
  form : '#registrationForm'
});

$('#registrationForm').ajaxForm(function() { 
  $('#message').addClass('success').fadeIn().html('<h3>Tack för din köanmälan</h3>'); 
  $('#registrationForm').fadeOut();//Hide the form 
});

/* -------- _System/assets/js/mobile-nav.js -------- */ 

$( "#navToggle" ).click(function() {
  $( "#mobileNav" ).toggleClass( "active" );
  $( this ).toggleClass( "active, close" );
});