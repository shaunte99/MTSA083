document.addEventListener("DOMContentLoaded", function() {
    const voteButton = document.getElementById("vote-btn");

    voteButton.addEventListener("click", function() {
        alert("Thank you for supporting Poppie! 🌟 Don't forget to use MTSA083 when voting.");
    });

    // Title color glowing effect
    const title = document.querySelector(".vote-title");
    setInterval(() => {
        title.style.color = title.style.color === "pink" ? "white" : "pink";
    }, 1000);

    // Manually update the visitor count (change this manually)
    let manualVisitCount = 57;  // Change this value manually as needed

    // Display the manual visitor count
    document.getElementById("visitCount").innerText = manualVisitCount;
});
