
/* -------- _System/assets/js/form.js -------- */ 

$.validate({
  form : '#jobForm'
});

// Job form
$('#jobForm').ajaxForm(function() {
  $('#message').addClass('success').fadeIn().html('<h3>Tack för din intresseanmälan, vi hör av oss om vi hittar en lämplig anställning för dig.</h3>');
  $('#jobForm').fadeOut();//Hide the form
});


/* -------- _System/assets/js/mobile-nav.js -------- */ 

$( "#navToggle" ).click(function() {
  $( "#mobileNav" ).toggleClass( "active" );
  $( this ).toggleClass( "active, close" );
});