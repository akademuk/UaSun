$(document).ready(function () {
    var slider = $('.workSlider');
    var counter = $('.sliderCounter');

    slider.slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        // infinite: false,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '.workSliderPrev',
        nextArrow: '.workSliderNext',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                    infinite: false,
                    dots: true,
                    variableWidth: true,
                    appendDots: $('.workSliderdots'),
                }
            },
            {
                breakpoint: 576,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: true,
                    variableWidth: true,
                    appendDots: $('.workSliderdots'),
                }
            }
        ]
        
    });

    var slideCount = slider.find('.slick-slide:not(.slick-cloned)').length;
    var counterText = '<span class="slideIndex">1</span> <span class="slideSeparator">|</span> <span class="slideTotal slideCount">' + slideCount + '</span>'; // Разделение значения на блоки с классами "slideIndex", "slideSeparator" и "slideTotal slideCount"
    counter.html(counterText);

    slider.on('afterChange', function (event, slick, currentSlide) {
        var currentSlideIndex = (currentSlide ? currentSlide : 0) + 1;
        var updatedCounterText = '<span class="slideIndex">' + currentSlideIndex + '</span> <span class="slideSeparator">|</span> <span class="slideTotal slideCount">' + slideCount + '</span>'; // Обновленное значение с учетом текущего индекса слайда
        counter.html(updatedCounterText);
    });

});
