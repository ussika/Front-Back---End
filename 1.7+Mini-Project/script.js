var currentStep = 1;
var formSteps = document.querySelectorAll('.form-step');

function nextStep(event) {
    event.preventDefault(); // Prevent form submission

    // Validate current step before moving to the next step
    if (validateStep(currentStep)) {
        formSteps[currentStep - 1].style.display = 'none';
        formSteps[currentStep].style.display = 'block';
        currentStep++;
    }
}

function prevStep() {
    formSteps[currentStep - 1].style.display = 'none';
    formSteps[currentStep - 2].style.display = 'block';
    currentStep--;
}

function validateStep(step) {
    var isValid = true;
    var inputs = formSteps[step - 1].querySelectorAll('input[required]');
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value.trim()) {
            isValid = false;
            alert('Please fill in all required fields before proceeding.');
            break;
        }
    }
    return isValid;
}

document.getElementById("checkout-form").addEventListener("submit", function(event) {
    // Validate final step before form submission
    if (!validateStep(currentStep)) {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in all required fields before proceeding.');
    }
});
