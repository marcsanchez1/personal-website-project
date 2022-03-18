// Sticky navigation
$(".main-nav").sticky({
  topSpacing: 0
});

$('.hero-header').hide();
$('.hero-header').slideDown(1000);
$('.hero-btns').hide();

setTimeout(function() {
  $('.hero-btns').fadeIn();
}, 1000);

// Slides in the about me section

    $('.slides').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });