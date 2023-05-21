
// Получаем все элементы sunBtnToggle
var sunBtnToggles = document.querySelectorAll('.sunBtnToggle1, .sunBtnToggle2, .sunBtnToggle3');

// Получаем элементы bannerImg и sun
var bannerImg = document.querySelector('.bannerImg');
var sun = document.querySelector('.sun');

// Индекс текущего элемента
var currentIndex = 0;

// Функция для обработки логики классов
function handleClassLogic() {
  // Удаляем класс active у всех элементов bannerImg и sun
  bannerImg.classList.remove('active');
  sun.classList.remove('active');

  // Проверяем текущий активный элемент
  if (sunBtnToggles[currentIndex].classList.contains('sunBtnToggle3')) {
    // Добавляем класс active к элементу bannerImg
    bannerImg.classList.add('active');
    // Добавляем класс active к элементу sun
    sun.classList.add('active');
  } else if (sunBtnToggles[currentIndex].classList.contains('sunBtnToggle2')) {
    // Добавляем класс active к элементу sun
    sun.classList.add('active');
    // Добавляем класс animation к элементу sun
    bannerImg.classList.add('animation');
  } else {
    // Удаляем класс animation у элемента sun
    bannerImg.classList.remove('animation');
  }
}


// Функция для добавления и удаления классов
function toggleClass() {
  // Удаляем класс active у всех элементов sunBtnToggle
  sunBtnToggles.forEach(function(element) {
    element.classList.remove('active');
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

setInterval(toggleClass, 5000);


