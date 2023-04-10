$(document).ready(function(){
    const service = "service_ns6rrgm";
    const template = "template_i5dibpa";

    $("#submit").click(function(){
        let params = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val()
        }

        emailjs.send(service,template,params)
        .then((res) => {
                $("#name").val("");
                $("#email").val("");
                $("#message").val("");
                console.log(res);
                alert("Email Sent");
            }
        )
    })
});