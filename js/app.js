// START SEND EMAIL
(function(){
    emailjs.init("user_HbXSwUrhvxqgOmDqO82UD");
 })();

$(".contact-form1").on("submit", function(event) {
    event.preventDefault();                                                                                                                                                                                                                                                                                                                                                                                                                                              
    var templateParams = {
        from_name:  event.currentTarget[0].value,
        from_email: event.currentTarget[1].value,
        message: event.currentTarget[2].value
    };
     
    emailjs.send('service_9r8qakp', 'template_evi47jm', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           $(".w-form-done").css("display", "block");
           event.currentTarget[0].value = "";
           event.currentTarget[1].value = "";
           event.currentTarget[2].value = "";
           setTimeout(function() {
               $(".w-form-done").css("display", "none");
           }, 3000);
        }, function(error) {
           console.log('FAILED...', error);
           $(".w-form-fail").css("display", "block");
           setTimeout(function() {
               $(".w-form-fail").css("display", "none");
           }, 3000);
        });
});
// END SEND EMAIL