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

document.querySelectorAll('.upload-row').forEach(row => {
  const input = row.querySelector('input[type="file"]');
  const btn = row.querySelector('.upload-pill');
  const sizeText = row.querySelector('.file-size');
  const remove = row.querySelector('.remove-file');

  btn.onclick = () => input.click();

  input.onchange = () => {
    const file = input.files[0];
    if (!file) return;

    const sizeMB = file.size / (1024 * 1024);

    sizeText.textContent = `${sizeMB.toFixed(1)} MB`;

    if (sizeMB > 2) {
      row.classList.add('error');
      row.classList.remove('success');
      alert('File size must be 2 MB or less');
      input.value = '';
      return;
    }

    row.classList.remove('error');
    row.classList.add('success');
  };

  remove.onclick = () => {
    input.value = '';
    row.classList.remove('success', 'error');
    sizeText.textContent = '';
  };
});

function submitStep7() {
  const requiredRows = document.querySelectorAll('.upload-row.required');
  for (let row of requiredRows) {
    if (!row.classList.contains('success')) {
      alert('Please upload all required documents');
      return;
    }
  }

  if (!document.getElementById('finalRemarks').value.trim()) {
    alert('Final remarks are required');
    return;
  }

  if (!document.getElementById('declareCheck').checked) {
    alert('Please accept the declaration');
    return;
  }

  alert('Franchise application submitted successfully!');
}