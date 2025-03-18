document.addEventListener("DOMContentLoaded", function() {
    const voteCards = document.querySelectorAll(".vote-card");
    const paymentForm = document.getElementById("payment-form");
    let selectedVotes = 0;
    let selectedPrice = 0;

    // Highlight selected vote package
    voteCards.forEach(card => {
        card.addEventListener("click", function() {
            voteCards.forEach(c => c.classList.remove("selected"));
            this.classList.add("selected");

            selectedVotes = this.getAttribute("data-votes");
            selectedPrice = this.getAttribute("data-price");
        });
    });

    // Payment form submission
    paymentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const cardNumber = document.getElementById("card-number").value.trim();
        const expiry = document.getElementById("expiry").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        if (!selectedVotes) {
            alert("Please select a voting package before proceeding.");
            return;
        }

        if (!name || !cardNumber || !expiry || !cvv) {
            alert("Please fill in all payment details.");
            return;
        }

        alert(`Payment successful! You have voted with ${selectedVotes} votes.`);
        window.location.href = "thank-you.html";
    });
});
