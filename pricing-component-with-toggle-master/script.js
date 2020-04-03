const toggle = document.getElementById('toggle');
const flexToggle = document.getElementById('flex-toggle');

toggle.addEventListener('change', e => {
  flexToggle.classList.toggle('show-monthly');
});

