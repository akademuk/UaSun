$(document).ready(function() {
    var windowWidth = $(window).width();
    if (windowWidth < 1200) {
      $('.advantagesContainer').slick({
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        appendDots: $('.advantagesContainerdots'),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
  });
  