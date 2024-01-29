const landing = document.querySelector("#landing");
const landingTitles = document.querySelectorAll(".landing-title");
const landingTitleDate = document.querySelector("#landing-title-date");
const landingRegistrationButton = document.querySelector("#landing-registration-button");

addEventListener("scroll", (e) => {
    e.preventDefault();
    
    let scrollOpacity = (862 - window.pageYOffset) / 862;
    landing.style.opacity = scrollOpacity;

    let textOpacity = (120 - window.pageYOffset) / 120;

    for (let i = 0; i < landingTitles.length; i++) {
        if (window.pageYOffset <= 130) {
            landingTitles[i].style.fontSize = (window.pageYOffset / 2) + 60 + "px";
            landingTitleDate.style.fontSize = (window.pageYOffset / 2) + 60 + "px";
            landingRegistrationButton.style.fontSize = (window.pageYOffset / 2) + 60 + "px";
        }
        landingTitles[i].style.opacity = textOpacity;
        landingTitleDate.style.opacity = textOpacity;
        landingRegistrationButton.style.opacity = textOpacity;
    }
})
