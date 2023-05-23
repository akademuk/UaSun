var modalTriggers = document.querySelectorAll('.modal-trigger');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close-btn');

modalTriggers.forEach(function(trigger) {
  trigger.addEventListener('click', function() {
    modal.classList.add('show');
  });
});

closeBtn.addEventListener('click', function() {
  modal.classList.remove('show');
});

// Дополнительный код для закрытия модального окна при клике вне его области

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});
