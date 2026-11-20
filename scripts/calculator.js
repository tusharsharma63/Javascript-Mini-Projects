let calculation = localStorage.getItem('calculation') || 
'';

document.querySelector('.js-calculation')
  .innerHTML = calculation;

function updateCalculation(n) {
  calculation += n;
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
  return calculation;
}

function deleteCalculation() {
  calculation = calculation.slice(0, -1);
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
}