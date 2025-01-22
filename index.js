const checkboxes = document.querySelectorAll('.item');
const pontosDisplay = document.getElementById('pontos');

function atualizarPontuacao() {
  let total = 0;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
  total += parseFloat(checkbox.value);
    }
  });
  pontosDisplay.textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
  pontosDisplay.textContent = '0.0';

  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', atualizarPontuacao);
});