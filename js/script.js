$(document).ready(function(){

  $(".has_dropsheet").hover(function(){
    $(this).children(".drop").toggleClass("active");
  });

  $(".has_dropsheet").hover(function(){
    $(".fas.fa-chevron-down").toggleClass("rotate");
  });

  $(".drop_elements").hover(function(){
    $(this).toggleClass("select");
  });


});
