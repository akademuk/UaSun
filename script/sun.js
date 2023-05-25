// Получаем все элементы sunBtnToggle
var sunBtnToggles = document.querySelectorAll('.sunBtnToggle1, .sunBtnToggle2, .sunBtnToggle3');

// Индекс текущего элемента
var currentIndex = 0;

// Функция для обработки логики классов
function handleClassLogic() {
  // Удаляем класс active у всех элементов sunBtnToggle
  sunBtnToggles.forEach(function(element) {
    element.classList.remove('active');
  });

  // Добавляем класс active к текущему элементу
  sunBtnToggles[currentIndex].classList.add('active');
}


// Функция для добавления и удаления классов
function toggleClass() {
  // Удаляем класс active у всех элементов sunBtnToggle, кроме указанных
  sunBtnToggles.forEach(function(element) {
    if (!element.classList.contains('sunBtnToggle1') && !element.classList.contains('sunBtnToggle2') && !element.classList.contains('sunBtnToggle3')) {
      element.classList.remove('active');
    }
  });

  // Добавляем класс active к текущему элементу
  sunBtnToggles[currentIndex].classList.add('active');

  // Вызываем функцию handleClassLogic
  handleClassLogic();

  // Увеличиваем индекс на 1
  currentIndex++;

  // Если индекс превышает количество элементов, сбрасываем его в 0
  if (currentIndex >= sunBtnToggles.length) {
    currentIndex = 0;
  }
}

setInterval(toggleClass, 2500);
