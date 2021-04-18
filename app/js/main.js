$(function(){

  $('.shop__filter-btn').on('click', function(){
    $('.shop__filters').slideToggle();
  });

  $('.shop-content__inner').addClass('shop-content__nogrid');

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  })

  $('.related__items').slick({
    slidesToShow: 4,
    prevArrow: '<button class="slick-btn slick-prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.detalis-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.detalis-tabs__top-item').removeClass('detalis-tabs__top-item--active');
    $(this).addClass('detalis-tabs__top-item--active');

    $('.detalis-tabs__content-item').removeClass('detalis-tabs__content-item--active');
    $($(this).attr('href')).addClass('detalis-tabs__content-item--active');
  });

  $('.detalis-item__num').styler();

  $('.detalis-slide__thumb').slick({
    asNavFor: '.detalis-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.detalis-slide__big').slick({
    asNavFor: '.detalis-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });
  
  $(".filter-products__star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $(".shop-item__star").rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $(".detalis-item__star").rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
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

$('.top-slider__inner').slick({
  dots: true,
  arrows:false,
  fade: true,
  autoplay: true,
  autoplaySpead: 2000
})

  var mixer = mixitup('.products__content');

});