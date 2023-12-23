function openCard() {
    var envelope = document.getElementById("envelope");
    var cardContainer = document.getElementById("cardContainer");

    envelope.style.opacity = 0;
    setTimeout(function() {
        envelope.style.display = "none";
        cardContainer.style.display = "flex";
        setTimeout(function() {
            cardContainer.style.opacity = 1;
        }, 50); // Delay for a smoother transition
    }, 500); // Should match the animation duration in CSS
}

document.getElementById("cardContainer").onclick = function() {
    var envelope = document.getElementById("envelope");
    var cardContainer = document.getElementById("cardContainer");

    cardContainer.style.opacity = 0;
    setTimeout(function() {
        cardContainer.style.display = "none";
        envelope.style.display = "flex";
        setTimeout(function() {
            envelope.style.opacity = 1;
        }, 50); // Delay for a smoother transition
    }, 500); // Should match the animation duration in CSS
};
