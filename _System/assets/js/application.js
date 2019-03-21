
/* -------- _System/assets/js/form.js -------- */ 

$.validate({
  form : '#feedbackForm, #jobForm'
});

// Feedback form
$('#feedbackForm').ajaxForm(function() {
  $('#message').addClass('success').fadeIn().html('<h3>Tack för din feedback. Vi återkommer inom kort.</h3>');
  $('#feedbackForm').fadeOut();//Hide the form
});

var concerning = jQuery('.concerning');
var select = this.value;
concerning.change(function () {
  if ($(this).val() == 'Annan') {
      $('#otherType').show();
  }
  else $('#otherType').hide();
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