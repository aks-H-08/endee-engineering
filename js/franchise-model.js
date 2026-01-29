let currentStep = 0;
const steps = document.querySelectorAll('.step');
const totalSteps = steps.length;

const progressFill = document.getElementById('progressFill');
const stepText = document.getElementById('stepText');
const backBtn = document.querySelector('.btn-back');
const nextBtn = document.querySelector('.btn-next');

function validateStep(stepIndex) {
  const fields = steps[stepIndex].querySelectorAll(
    'input, textarea'
  );

  for (let field of fields) {
    if (!field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }
  return true;
}

function nextStep() {
  if (!validateStep(currentStep)) return;

  if (currentStep < totalSteps - 1) {
    steps[currentStep].classList.remove('active');
    currentStep++;
    steps[currentStep].classList.add('active');
    updateUI();
  } else {
    alert('Franchise application submitted successfully!');
  }
}

function prevStep() {
  if (currentStep === 0) return;

  steps[currentStep].classList.remove('active');
  currentStep--;
  steps[currentStep].classList.add('active');
  updateUI();
}

function updateUI() {
  stepText.innerText = `${currentStep + 1} of ${totalSteps} steps completed`;
  progressFill.style.width = ((currentStep + 1) / totalSteps) * 100 + '%';
  backBtn.disabled = currentStep === 0;
  nextBtn.innerText = currentStep === totalSteps - 1 ? 'Submit' : 'Next';
}