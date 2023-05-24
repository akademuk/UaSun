$(document).ready(function () {
    var expandedItem = null;

    $('.reviewsSliderItem').each(function () {
        var currentItem = $(this);
        var itemText = currentItem.find('.reviewsSliderItemText');
        var btnSlider = currentItem.find('.btnSlider');

        // Проверка высоты контента и управление видимостью кнопки при загрузке страницы
        if (itemText.outerHeight() < 150) {
            btnSlider.hide();
        } else {
            btnSlider.show();
           
        }

        // Добавление троеточия к тексту, если высота превышает 150px
        if (itemText[0].scrollHeight > itemText.outerHeight()) {
            itemText.addClass('expanded');
        }
    });

    $('.btnSlider').click(function () {
        var currentItem = $(this).closest('.reviewsSliderItem');
        var itemText = currentItem.find('.reviewsSliderItemText');
        var btnIcon = $(this).find('img');

        if (currentItem.is(expandedItem)) {
            // Текущий блок уже раскрыт, закрываем его
            itemText.removeClass('expanded');
            itemText.css('max-height', '150px');
            btnIcon.css('transform', 'rotate(0deg)');
            expandedItem = null;
        } else {
            // Закрываем предыдущий раскрытый блок (если есть)
            if (expandedItem !== null) {
                expandedItem.find('.reviewsSliderItemText').removeClass('expanded');
                expandedItem.find('.reviewsSliderItemText').css('max-height', '150px');
                expandedItem.find('.btnSlider img').css('transform', 'rotate(0deg)');
            }

            // Раскрываем текущий блок
            itemText.addClass('expanded');
            itemText.css('max-height', itemText[0].scrollHeight + 'px');
            btnIcon.css('transform', 'rotate(180deg)');
            expandedItem = currentItem;
        }
    });
});