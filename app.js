$(function() {

$(".top-contents").fadeIn(3000);

$('header a').click(function(){
   var id = $(this).attr('href');
   var position = $(id).offset().top;
   $('html, body').animate({
     'scrollTop': position
   }, 1000);
 })

 $(window).scroll(function (){
   $('.fadein').each(function(){
       var elemPos = $(this).offset().top,
           scroll = $(window).scrollTop(),
           windowHeight = $(window).height();
         if (scroll > elemPos - windowHeight + 300){
             $(this).addClass('scrollin');
           }
       });
   });

  $('.twitter').hover(
    function(){
      $(this).animate({
        'font-size':'35px',
        'opacity':'1'
      },300);
    },
    function(){
      $(this).animate({
        'font-size':'25px',
        'opacity':'0.8'
      },300);
    });

  $('#bar').click(function(){
    var $bar = $('#bar');
    if($bar.hasClass('open')){
      $bar.removeClass('open');
      $('.responsive-menu').fadeIn(1000);
      $('.bars').removeClass('fas fa-bars');
      $('.bars').addClass('fas fa-times');
    }else{
      $bar.addClass('open');
      $('.responsive-menu').fadeOut(1000);
      $('.bars').removeClass('fas fa-times');
      $('.bars').addClass('fas fa-bars');
    }
  });

  $('.responsive-menu a').click(function(){
    $('.responsive-menu').hide();
    $('.bars').removeClass('fas fa-times');
    $('.bars').addClass('fas fa-bars');
  });

});

console.log('うんこしたい');
