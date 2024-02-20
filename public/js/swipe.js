/*const landing = document.querySelector("#landing");
const landingTitles = document.querySelectorAll(".landing-title");
const landingTitleDate = document.querySelector("#landing-title-date");
const landingRegistrationButton = document.querySelector("#landing-registration-button");
const arrow = document.querySelector("#arrow");
const landingRegistrationButtonArrowShadowLeft = document.querySelector("#landing-registration-button-arrow-shadow-left");
const landingRegistrationButtonArrowShadowRight = document.querySelector("#landing-registration-button-arrow-shadow-right");*/

// Variables that will change depending on media query
/*let landingTitlesDefaultFontSize = 60;
let scrollOpacityLength = 862;*/
window.onresize = function () {
    checkWindowLengthAndUpdateVariables();
};

checkWindowLengthAndUpdateVariables();

addEventListener("swipe", (e) => {
    console.log(2)
    e.preventDefault();
    //freezeLandingRegistrationWhenScrolling()
    
    let scrollOpacity = (scrollOpacityLength - window.pageYOffset) / scrollOpacityLength;
    landing.style.opacity = scrollOpacity;

    let elementOpacity = (120 - window.pageYOffset) / 110;

    for (let i = 0; i < landingTitles.length; i++) {
        if (window.pageYOffset <= 130) {
            landingTitles[i].style.fontSize = (window.pageYOffset / 2) + landingTitlesDefaultFontSize + "px";
            landingTitleDate.style.fontSize = (window.pageYOffset / 2) + landingTitlesDefaultFontSize + "px";

            landingRegistrationButton.style.fontSize = (window.pageYOffset / 2) + 48 + "px";
        }
        landingTitles[i].style.opacity = elementOpacity;
        landingTitleDate.style.opacity = elementOpacity;

        landingRegistrationButton.style.opacity = elementOpacity;
    }

    updateArrow(elementOpacity);
})

function updateArrow(elementOpacity) {
    arrow.style.opacity = elementOpacity;
    arrow.style.top = 720 + window.pageYOffset + "px";
}

function checkWindowLengthAndUpdateVariables() {
    if (window.innerWidth <= 768) {
        landingTitlesDefaultFontSize = 42;
        scrollOpacityLength = 400;
    } else {
        landingTitlesDefaultFontSize = 60;
        scrollOpacityLength = 862;
    }
}

/* Disable pinch zoom */

document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault(); }
  }, false);