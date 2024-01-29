const registrationExitButton = document.querySelector("#registration-exit-button");

registration.style.zIndex = "20";
registration.style.transform = 'translate(100%)';

landingRegistrationButton.addEventListener("click", () => {
    registration.style.transition = 'ease-in-out all 1s';
    registration.style.transform = 'translate(0%)';
})

registrationExitButton.addEventListener("click", () => {
    registration.style.transform = 'translate(100%)';
})