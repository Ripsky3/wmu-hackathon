let allPrizeBubbles = document.querySelectorAll(".prize-bubble");
let allBubbles = document.querySelectorAll(".bubble");
let body = document.querySelector("body");

for (let i = 0; i < allPrizeBubbles.length; i++) {
    addPrizeBubbleEvents(i);
}

window.onresize = function () {
    startupResponsive();
};

startupResponsive();

function addPrizeBubbleEvents(prizeBubbleIndex) {
    allPrizeBubbles[prizeBubbleIndex].addEventListener("mouseenter", (e) => {

        // Display text
        allPrizeBubbles[prizeBubbleIndex].children[0].style.display = "block";

        blurAllOtherBubbles(prizeBubbleIndex);
    })
    allPrizeBubbles[prizeBubbleIndex].addEventListener("mouseleave", () => {

        // Hide text
        allPrizeBubbles[prizeBubbleIndex].children[0].style.display = "none";

        unblurAllOtherBubbles(prizeBubbleIndex);
    })
}

function blurAllOtherBubbles(prizeBubbleIndexNotToBlur) {
    for (let i = 0; i < allPrizeBubbles.length; i++) {
        if (i != prizeBubbleIndexNotToBlur) {
            allPrizeBubbles[i].style.filter = "blur(7px)";
        }
    }
}

function unblurAllOtherBubbles(prizeBubbleIndexNotToBlur) {
    for (let i = 0; i < allPrizeBubbles.length; i++) {
        if (i != prizeBubbleIndexNotToBlur) {
            allPrizeBubbles[i].style.filter = "blur(0px)";
        }
    }
}

function startupResponsive() {
    if (window.innerWidth <= 768) {
        moveAllBubblesInCorrectPositionForMobileView();
        //changePrizeBubbleListener();
    } else {
        moveAllBubblesInCorrectPositionForDesktopView(); 
    }
}

function moveAllBubblesInCorrectPositionForMobileView() {
    for (let i = 0; i < allBubbles.length; i++) {
        allBubbles[i].style.left = i * 20 + "px";
    }
}

function moveAllBubblesInCorrectPositionForDesktopView() {
    for (let i = 0; i < allBubbles.length; i++) {
        allBubbles[i].style.position = "relative";
    }
}

function addTouchStartToAllPrizeBubbles() {
    for (let i = 0; i < allPrizeBubbles.length; i++) {
        addPrizeBubblesMobileEvents(i);
    }
}

function addPrizeBubblesMobileEvents(prizeBubbleIndex) {

    body.addEventListener('touchstart', (e) => {
        // Figure this error out
        if (e.target.classList.contains("prize-bubble") != true) {
            resetAllBubbles();
        }
    })

    allPrizeBubbles[prizeBubbleIndex].addEventListener('touchstart', () => {        
        allPrizeBubbles[prizeBubbleIndex].children[0].style.display = "block";
        allPrizeBubbles[prizeBubbleIndex].classList.add("selected");
        blurAllOtherBubbles(prizeBubbleIndex);
        unblurTouchedBubble(prizeBubbleIndex);
        removeAllOtherBubbleText(prizeBubbleIndex);
    });
}

function unblurTouchedBubble(prizeBubbleIndex) {
    allPrizeBubbles[prizeBubbleIndex].style.filter = "blur(0px)";
}

function removeAllOtherBubbleText(prizeBubbleIndex) {
    for (let i = 0; i < allPrizeBubbles.length; i++) {
        if (i != prizeBubbleIndex) {
            allPrizeBubbles[i].children[0].style.display = "none";
            allPrizeBubbles[i].classList.remove("selected");
        }
    }
}

function resetAllBubbles(prizeBubbleIndex) {
    for (let i = 0; i < allPrizeBubbles.length; i++) {

        allPrizeBubbles[i].children[0].style.display = "none";
        allPrizeBubbles[i].style.filter = "blur(0px)";
        
        
    }
}

addTouchStartToAllPrizeBubbles();
