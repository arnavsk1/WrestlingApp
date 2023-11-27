document.addEventListener("DOMContentLoaded", function() {
    const teamANameInput = document.getElementById("teamAName");
    const teamBNameInput = document.getElementById("teamBName");
    const teamA = document.getElementById("teamA");
    const teamB = document.getElementById("teamB");

    // Function to update team names
    function updateTeamNames() {
        teamA.textContent = teamANameInput.value || "Home";
        teamB.textContent = teamBNameInput.value || "Away";
    }

    const updateNamesButton = document.getElementById("updateNamesButton");
    updateNamesButton.addEventListener("click", updateTeamNames);

    // Function to increment scores
    function incrementScore(scoreId) {
        const scoreElement = document.getElementById(scoreId);
        const currentScore = parseInt(scoreElement.textContent);
        scoreElement.textContent = currentScore + 1;
    }

    const scoreButtons = document.querySelectorAll(".scoreButton");
    scoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const scoreId = button.getAttribute("data-score");
            incrementScore(scoreId);
        });
    });

    // Weight Class Generator
    const weightClass = ["101", "108", "116", "124", "131", "138", "145", "152", "160", "170", "190", "215", "285"];

    const generateButton = document.getElementById("generateButton");
    const result = document.getElementById("result");

    function generateRandomNumber() {
        const min = 0;
        const max = 12;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        result.textContent =  `The starting weight class today is: ${weightClass[randomNumber]}`;
    }

    generateButton.addEventListener("click", generateRandomNumber);
});
