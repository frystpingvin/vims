$.validate({
  form : '#registrationForm'
});

$('#registrationForm').ajaxForm(function() { 
  $('#message').addClass('success').fadeIn().html('<h3>Tack för din köanmälan</h3>'); 
  $('#registrationForm').fadeOut();//Hide the form 
});