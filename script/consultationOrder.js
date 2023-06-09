var modalTriggers = document.querySelectorAll('.modal-trigger');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close-btn');
var body = document.querySelector('.body');

modalTriggers.forEach(function(trigger) {
  trigger.addEventListener('click', function() {
    modal.classList.add('show');
    body.classList.add('active');
  });
});

closeBtn.addEventListener('click', function() {
  modal.classList.remove('show');
  body.classList.remove('active');
});

// Дополнительный код для закрытия модального окна при клике вне его области

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.remove('show');
    body.classList.remove('active');
  }
});
