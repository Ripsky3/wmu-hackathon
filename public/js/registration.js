const registrationExitButton = document.querySelector("#registration-exit-button");
const registrationFormFirstNameInput = document.querySelector("#registration-form-section-firstname-input");
const registrationFormLastNameInput = document.querySelector("#registration-form-section-lastname-input");
const registrationFormEmailInput = document.querySelector("#registration-form-section-email-input");
const registrationFormRegisterButton = document.querySelector("#registration-form-section-register-button");
const registration = document.querySelector("#registration");

registration.style.visibility = "hidden";
registration.style.transition = 'ease-in-out all 1s';

window.onload = () => {
    registration.style.transform = 'translate(100%)'; // Test test out
}

landingRegistrationButton.addEventListener("click", () => {
    registration.style.visibility = "visible";
    registration.style.transform = 'translate(0%)';
    document.querySelector("body").style.overflow = "hidden";
})

registrationExitButton.addEventListener("click", () => {
    registration.style.transform = 'translate(100%)';
    document.querySelector("body").style.overflowY = "scroll";
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

addEventListener("scroll", (e) => {
    registration.style.top = window.pageYOffset + "px"; 
});