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

    function playCenterVideo() {
        var centerSlide = slider.find(".slick-current");
        var centerVideo = centerSlide.find("video");

        // Остановка всех видео перед воспроизведением
        slider.find("video").each(function () {
            this.pause();
            this.currentTime = 0;
        });

        // Воспроизведение видео в центральном слайде
        // if (centerVideo.length > 0) {
        //     centerVideo.get(0).play();
        // }
    }

    slider.on('afterChange', function (event, slick, currentSlide) {
        setTimeout(function() {
            playCenterVideo();
        }, 100);
    });
    

    // Запуск видео при загрузке страницы и при изменении размера окна
    playCenterVideo();

    $(window).on('resize', function () {
        var windowWidth = $(window).width();

        if (windowWidth < 1200) {
            playCenterVideo();
        } else {
            // При размере окна больше или равном 1200 пикселей останавливаем видео
            slider.find("video").each(function () {
                this.pause();
                this.currentTime = 0;
            });
        }
    });

    var slideCount = slider.find('.slick-slide:not(.slick-cloned)').length;
    var counterText = '<span class="slideIndex">1</span> <span class="slideSeparator">|</span> <span class="slideTotal slideCount">' + slideCount + '</span>';
    counter.html(counterText);

    slider.on('afterChange', function (event, slick, currentSlide) {
        var currentSlideIndex = (currentSlide ? currentSlide : 0) + 1;
        var updatedCounterText = '<span class="slideIndex">' + currentSlideIndex + '</span> <span class="slideSeparator">|</span> <span class="slideTotal slideCount">' + slideCount + '</span>';
        counter.html(updatedCounterText);
    });
});
