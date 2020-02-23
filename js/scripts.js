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
});

$("button").click(function(event) {
  event.preventDefault();
  var name=document.getElementById('name');
  var email= document.getElementById('email').value;
  var message=document.getElementById('message');

  if(name=""){
   console.log("Please enter your name");
  }
  else if(message=""){
    console.log("Please enter your message");
    }
  else if(email.length<10) {
    console.log("Please enter a valid email address");
  }
  else{
    console.log("Dear " + name + ", we have received your message. Thank you for contacting us.");
  }
});

$("button").on ('click',function() {
  $('form').each(function(){
    this.reset();
  })
})
