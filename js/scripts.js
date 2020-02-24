$(document).ready(function() {
  $(".floatCaption").hover(function() {
    $(this).find(".imageCaption").toggle(400);
  })
  $(".clickDesign").click(function() {
    $(".showDesign").slideToggle();
    $(".hideDesign").slideToggle();
  });
  $(".clickDevelopment").click(function() {
    $(".showDevelopment").slideToggle();
    $(".hideDevelopment").slideToggle();
  });
  $(".clickProduct").click(function() {
    $(".showProduct").slideToggle();
    $(".hideProduct").slideToggle();
  }); 

  $("#button").click(function(event) {
    event.preventDefault();
    var name=document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var message=document.getElementById('message').value;
  
    if(name===""){
     alert("Please fill all the fields");
    }
    else if(message===""){
      alert("Please enter your message");
      }
    else if(email.length<10) {
      alert("Please enter a valid email address");
    }
    else{
      alert("Dear " + name + ", your message has been sent successfully. Thank you for contacting us.");
    }
  });
  $("#button").on ('click',function() {
    $('form').each(function(){
    this.reset();
  })
}) 
});

