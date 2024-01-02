// making team names and such
document.addEventListener("DOMContentLoaded", function () {
    const teamANameInput = document.getElementById("teamAName");
    const teamBNameInput = document.getElementById("teamBName");
    const teamA = document.getElementById("teamA");
    const teamB = document.getElementById("teamB");

    function updateTeamNames() {
        teamA.textContent = teamANameInput.value || "Home";
        teamB.textContent = teamBNameInput.value || "Away";
    }

    const updateNamesButton = document.getElementById("updateNamesButton");
    updateNamesButton.addEventListener("click", function () {
        console.log("Update Team Names button clicked");
        updateTeamNames();
    });

    // scores and such 

    function incrementScore(scoreId, value) {
        const scoreElement = document.getElementById(scoreId);
        const currentScore = parseInt(scoreElement.textContent);
        scoreElement.textContent = currentScore + value;
    }

    const scoreButtons = document.querySelectorAll(".scoreButton");
    scoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Score button clicked");
            const scoreId = button.getAttribute("data-score");
            const value = parseInt(button.getAttribute("data-value"));
            incrementScore(scoreId, value);
        });
    });

    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", function () {
        console.log("Reset button clicked");
        const scoreElements = document.querySelectorAll(".score");
        scoreElements.forEach(scoreElement => {
            console.log(scoreElement.textContent);
            scoreElement.textContent = "0";
        });
    });

    // weightclasses and such

    const weightClass = ["101", "108", "116", "124", "131", "138", "145", "152", "160", "170", "190", "215", "285"];

    const generateButton = document.getElementById("generateButton");
    const result = document.getElementById("result");

    function generateRandomNumber() {
        const min = 0;
        const max = 12;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        result.textContent = `The starting weight class today is: ${weightClass[randomNumber]}`;
    }

    document.addEventListener("DOMContentLoaded", function () {
       
    });
    
    generateButton.addEventListener("click", function () {
        console.log("Generate button clicked");
        generateRandomNumber();
    });
});
