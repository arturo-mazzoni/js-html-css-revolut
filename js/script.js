$(document).ready(function(){

  $(".has_dropsheet").hover(function(){
    $(this).children(".drop").toggleClass("active");
  });

  $(".fas.fa-chevron-up").hide();

  $(".has_dropsheet").hover(function(){
    $(".fas.fa-chevron-down").hide();
  });

  $(".has_dropsheet").hover(function(){
    $(".fas.fa-chevron-up").show();
  });

});
