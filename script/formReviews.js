var modalTriggers2 = document.querySelectorAll('.modal-trigger2');
var modal2 = document.querySelector('.modal2');
var closeBtn2 = document.querySelector('.close-btn2');
var body = document.querySelector('.body');

modalTriggers2.forEach(function(trigger) {
  trigger.addEventListener('click', function() {
    modal2.classList.add('show');
    body.classList.add('active');
  });
});

closeBtn2.addEventListener('click', function() {
  modal2.classList.remove('show');
  body.classList.remove('active');
});

// Дополнительный код для закрытия модального окна при клике вне его области

window.addEventListener('click', function(event) {
  if (event.target === modal2) {
    modal2.classList.remove('show');
    body.classList.remove('active');
  }
});
