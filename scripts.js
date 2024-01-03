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

    // ... (rest of your code)

    // Function to get data for CSV
    function getDataForCSV() {
        const teamAName = teamA.textContent;
        const teamBName = teamB.textContent;
        const teamAScore = document.getElementById("teamAScore").textContent;
        const teamBScore = document.getElementById("teamBScore").textContent;

        // Add more data as needed

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
        const link = document.createElement("a");
        link.setAttribute("href", csvContent);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const downloadButton = document.getElementById("downloadButton");
    downloadButton.addEventListener("click", function () {
        console.log("Download CSV button clicked");
        const data = getDataForCSV();
        const csvData = convertToCSV(data);
        downloadCSV(csvData, "team_data.csv");
    });
});
