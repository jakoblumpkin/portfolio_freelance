
(function(){
    emailjs.init("user_HbXSwUrhvxqgOmDqO82UD");
 })();

$(".contact-form1").on("submit", function(event) {
    event.preventDefault();                                                                                                                                                                                                                                                                                                                                                                                                                                                
    var name = event.target[0].value;    
    var email = event.target[1].value;
    var message = event.target[2].value;

    var templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };
     
    emailjs.send('service_9r8qakp', 'template_evi47jm', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           $(".w-form-done").css("display", "block");
           setTimeout(function() {
               $(".w-form-done").css("display", "none");
           }, 3000);
        }, function(error) {
           console.log('FAILED...', error);
        });

});