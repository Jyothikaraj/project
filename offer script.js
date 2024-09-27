function countdownTimer(deadline) {
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = deadline - now;

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (timeLeft > 0) {
            document.getElementById("time-left").textContent = `${hours}h ${minutes}m ${seconds}s`;
        } else {
            clearInterval(timer);
            document.getElementById("offer-message").textContent = "Sorry, this offer has expired!";
        }
    }, 1000);
}

function setOfferTimer() {
    const now = new Date();
    const offerDeadline = new Date(now.getTime() + 2 * 60 * 60 * 1000); // 2 hours from now
    countdownTimer(offerDeadline);
}

// Start the timer on page load
window.onload = setOfferTimer;