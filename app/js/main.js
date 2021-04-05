
$(function () {
$('.related__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
});

$('.product-tabs__top-item').on('click',function (e) {
  e.preventDefault();
  $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
  $(this).addClass('product-tabs__top-item--active');

  $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
  $($(this).attr('href')).addClass('product-tabs__content-item--active');
});

$('.product-details__slider-1').slick({
   slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-details__slider-2',
  vertical:true,
  arrows:false,
  focusOnSelect:true
});

$('.product-details__slider-2').slick({
  asNavFor: '.product-details__slider-1',
  arrows:false,
  fade:true,
});




$('.contact-filter__btn').on('click',function (){
  $('.contact-filter__btn').removeClass('contact-filter__btn-active');
  $(this).addClass('contact-filter__btn-active');
});

$('.contact-filter__btn-grid').on('click',function () {
$('.products-one__item').removeClass('products-one__item--list');
$('.pagination').removeClass('pagination__list--mod');
});

$('.contact-filter__btn-list').on('click',function () {
$('.products-one__item').addClass('products-one__item--list');
$('.pagination').addClass('pagination__list--mod');
});



$('.contact-filter__select, .product-details__input').styler({
});

$(".filter-recent__stars--mod").rateYo({
 starWidth: "20px",
 ratedFill: "#ffcc00",
 rating: "80%",
 spacing: "10px"
});

$(".filter-recent__stars").rateYo({
 starWidth: "16px",
 ratedFill: "#ffcc00",
 rating: "80%",
 precision: 0
});


$(".filter-price__input").ionRangeSlider({ 
      type: "double",
      prefix: "$",
      onStart: function (data) {
  $('.filter-price__from').text(data.from);
  $('.filter-price__to').text(data.to);
      },
        onChange: function (data) {
    $('.filter-price__from').text(data.from);
    $('.filter-price__to').text(data.to);
        },
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


});


