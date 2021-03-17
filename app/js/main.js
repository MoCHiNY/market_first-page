$(function () {

 $('.slider-top__wrapper').slick({
  arrows:false,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: false,
  autoplaySpeed: 2000
 });
var mixer1 = mixitup('.products-one__content', {
    selectors: {
      control: '.products-one--button'
    }
  });
  var mixer2 = mixitup('.products-two__content', {
    selectors: {
      control: '.products__btn--two'
    }
  });

  $('.slider-cooperation__list').slick({
  arrows:false,
  infinite: true,
  speed: 500,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1
 });

 


 
 });