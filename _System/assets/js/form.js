$.validate({
  form : '#jobForm'
});

// Job form
$('#jobForm').ajaxForm(function() {
  $('#message').addClass('success').fadeIn().html('<h3>Tack för din intresseanmälan, vi hör av oss om vi hittar en lämplig anställning för dig.</h3>');
  $('#jobForm').fadeOut();//Hide the form
});
