$.validate({
  form : '#registrationForm'
});

$('#registrationForm').ajaxForm(function() { 
  $('#message').addClass('success').fadeIn().html('<h3>Tack för din köanmälan, vänligen spara bekräftelsemailet som du mottagit på e-post.</h3>'); 
  $('#registrationForm').fadeOut();//Hide the form 
});