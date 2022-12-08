$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
         formSuccess();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();


    $.ajax({
        type: "POST",
        url: "https://script.google.com/macros/s/AKfycbzfuDS8WTQKRWki_56WNdb3t4Wif-CFW9q5o8BVybUk6FehLsQ-JJ_NwlrtvcNld8lR/exec",
        data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message
});
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Revenim cu un mesaj în curând!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
