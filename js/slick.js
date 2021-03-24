$(document).ready(function(){
  $('.comment__slider').slick({
    infinite: true,
    variableWidth: true,
 	slidesToShow:1,
  	slidesToScroll: 1,
  	dots:true,
  	dotsClass: 'comment__dots',
  	appendDots: $('.comment__footer'),
  	prevArrow: $('.arrow-left'),
  	nextArrow: $('.arrow-right'),
  });
});