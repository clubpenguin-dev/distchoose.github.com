document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get the value of the skill level question
    const experience = document.getElementById('experience').value;

    let recommendation = "";

    // Simple logic for recommending a distro based on the answer
    if (experience === "beginner") {
        recommendation = "We recommend Linux Mint!";
    } else if (experience === "intermediate") {
        recommendation = "Try Ubuntu or Fedora!";
    } else if (experience === "advanced") {
        recommendation = "You might enjoy Arch Linux or Gentoo!";
    }

    // Display the result on the page
    document.getElementById('result').innerText = recommendation;
});
