
const formSteps = document.querySelectorAll('.form-step');
let currentStep = 0;

function showStep(index) {
  formSteps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });
}

document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < formSteps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

document.querySelectorAll('.prev-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

document.getElementById('formulaire').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Formulaire soumis avec succès !');
});
