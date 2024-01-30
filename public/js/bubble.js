let allPrizeBubbles = document.querySelectorAll(".prize-bubble");

for (let i = 0; i < allPrizeBubbles.length; i++) {
    addPrizeBubbleEvents(i);
}

function addPrizeBubbleEvents(prizeBubbleIndex) {
    allPrizeBubbles[prizeBubbleIndex].addEventListener("mouseenter", () => {

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