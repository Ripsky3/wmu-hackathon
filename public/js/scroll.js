const landing = document.querySelector("#landing");
const landingTitles = document.querySelectorAll(".landing-title");
const landingTitleDate = document.querySelector("#landing-title-date");
const landingRegistrationButton = document.querySelector("#landing-registration-button");
const landingRegistrationButtonShadow = document.querySelector("#landing-registration-button-shadow");
const arrow = document.querySelector("#arrow");

addEventListener("scroll", (e) => {
    e.preventDefault();
    
    let scrollOpacity = (862 - window.pageYOffset) / 862;
    landing.style.opacity = scrollOpacity;

    let elementOpacity = (120 - window.pageYOffset) / 120;

    for (let i = 0; i < landingTitles.length; i++) {
        if (window.pageYOffset <= 130) {
            landingTitles[i].style.fontSize = (window.pageYOffset / 2) + 60 + "px";
            landingTitleDate.style.fontSize = (window.pageYOffset / 2) + 60 + "px";

            landingRegistrationButton.style.fontSize = (window.pageYOffset / 2) + 48 + "px";
            landingRegistrationButtonShadow.style.fontSize = (window.pageYOffset / 2) + 48 + "px";
        }
        landingTitles[i].style.opacity = elementOpacity;
        landingTitleDate.style.opacity = elementOpacity;

        landingRegistrationButton.style.opacity = elementOpacity;
        landingRegistrationButtonShadow.style.opacity = elementOpacity;
    }

    updateArrow(elementOpacity);
})

function updateArrow(elementOpacity) {
    arrow.style.opacity = elementOpacity;
    arrow.style.top = 700 + window.pageYOffset + "px";
}
