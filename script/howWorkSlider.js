$(document).ready(function () {
    var slider = $('.howWorkSlider');
    var counter = $('.howWorksliderCounter');

    slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        centerMode: true,
        prevArrow: '.howWorkSliderPrev',
        nextArrow: '.howWorkSliderNext',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                    infinite: true,
                    variableWidth: true,
                    dots: true,
                    appendDots: $('.howWorkSliderdots')
                },
                breakpoint: 767,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: true,
                    appendDots: $('.howWorkSliderdots')
                },
                breakpoint: 576,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: true,
                    appendDots: $('.howWorkSliderdots')
                },
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
