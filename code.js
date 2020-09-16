$("#contact-form").submit(function (e) {
  var name = documenttElementById("inputName"),
      email= documenttElementById("inputName"), 
     subject= document.getementById("inputsubject"),
    message = document.getElementById("inputMessage");

  if (!name.value||!company.value || !email.value || !message.value) {
    alertify.error("Please check your entries");
  } else {
    $.ajax({
      url: "https://formspree.io/manjunathmodi43@gmail.com",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json",
    });
    e.preventDefault();
    $(this).get(0).reset();
    alertify.success("Message sent");
  }
});
