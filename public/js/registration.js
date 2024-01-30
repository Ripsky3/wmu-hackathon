const registrationExitButton = document.querySelector("#registration-exit-button");
const registrationFormFirstNameInput = document.querySelector("#registration-form-section-firstname-input");
const registrationFormLastNameInput = document.querySelector("#registration-form-section-lastname-input");
const registrationFormEmailInput = document.querySelector("#registration-form-section-email-input");
const registrationFormRegisterButton = document.querySelector("#registration-form-section-register-button");



registration.style.zIndex = "20";
registration.style.transform = 'translate(100%)';

landingRegistrationButton.addEventListener("click", () => {
    registration.style.transition = 'ease-in-out all 1s';
    registration.style.transform = 'translate(0%)';
})

registrationExitButton.addEventListener("click", () => {
    registration.style.transform = 'translate(100%)';
})

registrationFormRegisterButton.addEventListener("click", () => {
    registerUser().then(res => {
        alert(res.message);
        registration.style.transform = 'translate(100%)';
    })
})

async function registerUser() {
    console.log(1)
    const response = await fetch("/registeruser", {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstname: registrationFormFirstNameInput.value,
            lastname: registrationFormLastNameInput.value,
            email: registrationFormEmailInput.value
        })
    }).then(res => res.json());
    return response
}