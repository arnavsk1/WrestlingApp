// yourscript.js

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

    // Function to increment score
    function incrementScore(scoreId, value) {
        const scoreElement = document.getElementById(scoreId);
        const currentScore = parseInt(scoreElement.textContent);
        scoreElement.textContent = currentScore + value;
    }

    // Event listener for score buttons
    document.querySelectorAll(".scoreButton").forEach(button => {
        button.addEventListener("click", function () {
            console.log("Score button clicked");
            const scoreId = button.getAttribute("data-score");
            const value = parseInt(button.getAttribute("data-value"));
            incrementScore(scoreId, value);
        });
    });

    // Function to generate random weight class
    const generateButton = document.getElementById("generateButton");
    const result = document.getElementById("result");

    function generateRandomNumber() {
        const weightClass = ["101", "108", "116", "124", "131", "138", "145", "152", "160", "170", "190", "215", "285"];
        const min = 0;
        const max = 12;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        result.textContent = `The starting weight class today is: ${weightClass[randomNumber]}`;
    }

    generateButton.addEventListener("click", function () {
        console.log("Generate button clicked");
        generateRandomNumber();
    });

    // Updated Function to download CSV
    function downloadCSV(data, filename) {
        const csvContent = `data:text/csv;charset=utf-8,${encodeURIComponent(data)}`;
        const blob = new Blob([csvContent], { type: "text/csv" });

        const link = document.createElement("a");

        // Check if the file already exists in local storage
        const existingData = localStorage.getItem("team_data.csv");

        if (existingData) {
            // If it exists, append the new data to the existing data
            const reader = new FileReader();

            reader.onload = function (e) {
                const combinedData = e.target.result + "\n" + csvContent;
                const newBlob = new Blob([combinedData], { type: "text/csv" });

                link.href = URL.createObjectURL(newBlob);
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Update the data in local storage
                localStorage.setItem("team_data.csv", combinedData);
            };

            reader.readAsText(blob);
        } else {
            // If the file doesn't exist, create a new one
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Save the data in local storage
            localStorage.setItem("team_data.csv", csvContent);
        }
    }

    // Function to get data for CSV
    function getDataForCSV() {
        const teamAName = teamA.textContent;
        const teamBName = teamB.textContent;
        const teamAScore = document.getElementById("teamAScore").textContent;
        const teamBScore = document.getElementById("teamBScore").textContent;

        return {
            teamAName,
            teamBName,
            teamAScore,
            teamBScore,
            // Add more properties as needed
        };
    }

    // Function to convert data to CSV
    function convertToCSV(data) {
        const headers = Object.keys(data).join(",");
        const values = Object.values(data).join(",");
        return `${headers}\n${values}`;
    }

    // Function to download CSV
    function downloadCSV(data, filename) {
        const csvContent = `data:text/csv;charset=utf-8,${encodeURIComponent(data)}`;
        const blob = new Blob([csvContent], { type: "text/csv" });

        const link = document.createElement("a");

        // Check if the file already exists in local storage
        const existingData = localStorage.getItem("team_data.csv");

        if (existingData) {
            // If it exists, append the new data to the existing data
            const reader = new FileReader();

            reader.onload = function (e) {
                const combinedData = e.target.result + "\n" + csvContent;
                const newBlob = new Blob([combinedData], { type: "text/csv" });

                link.href = URL.createObjectURL(newBlob);
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Update the data in local storage
                localStorage.setItem("team_data.csv", combinedData);
            };

            reader.readAsText(blob);
        } else {
            // If the file doesn't exist, create a new one
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Save the data in local storage
            localStorage.setItem("team_data.csv", csvContent);
        }
    }

    // Function to download CSV
    function downloadCSV(data, filename) {
        const csvContent = `data:text/csv;charset=utf-8,${encodeURIComponent(data)}`;
        const blob = new Blob([csvContent], { type: "text/csv" });

        const link = document.createElement("a");

        // Check if the file already exists in local storage
        const existingData = localStorage.getItem("team_data.csv");

        if (existingData) {
            // If it exists, append the new data to the existing data
            const reader = new FileReader();

            reader.onload = function (e) {
                const combinedData = e.target.result + "\n" + csvContent;
                const newBlob = new Blob([combinedData], { type: "text/csv" });

                link.href = URL.createObjectURL(newBlob);
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Update the data in local storage
                localStorage.setItem("team_data.csv", combinedData);
            };

            reader.readAsText(blob);
        } else {
            // If the file doesn't exist, create a new one
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Save the data in local storage
            localStorage.setItem("team_data.csv", csvContent);
        }
    }

    // Event listener for download button
    const downloadButton = document.getElementById("downloadButton");
    downloadButton.addEventListener("click", function () {
        console.log("Download CSV button clicked");
        const data = getDataForCSV();
        const csvData = convertToCSV(data);
        downloadCSV(csvData, "team_data.csv");
    });
});
