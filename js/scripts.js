$(document).ready(function() {
  $(".imageCaption").hide();
  $(".floatCaption").hover(function() {
    $(this).find(".imageCaption").toggle(500);
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