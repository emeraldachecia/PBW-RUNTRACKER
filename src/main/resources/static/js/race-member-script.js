function fetchUpcomingRaces() {
  const upcomingList = document.getElementById("upcoming-list");
  upcomingList.innerHTML = "<li>Loading...</li>";

  setTimeout(() => {
    upcomingList.innerHTML = "";
    const races = ["Race A", "Race B", "Race C"];
    races.forEach((race) => {
      const li = document.createElement("li");
      li.textContent = race;
      upcomingList.appendChild(li);
    });
  }, 1000);
}

function fetchRaceHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "<li>Loading...</li>";

  setTimeout(() => {
    historyList.innerHTML = "";
    const races = ["Completed Race X", "Completed Race Y", "Completed Race Z"];
    races.forEach((race) => {
      const li = document.createElement("li");
      li.textContent = race;
      historyList.appendChild(li);
    });
  }, 1000);
}

function fetchRaceDetails() {
  const raceId = document.getElementById("race-id").value;
  const raceInfo = document.getElementById("race-info");
  const topRunners = document.getElementById("top-runners");
  raceInfo.textContent = "Loading...";
  topRunners.innerHTML = "";

  setTimeout(() => {
    raceInfo.textContent = `Details for Race ID: ${raceId}`;
    const runners = [
      "Runner 1",
      "Runner 2",
      "Runner 3",
      "Runner 4",
      "Runner 5",
    ];
    runners.forEach((runner) => {
      const li = document.createElement("li");
      li.textContent = runner;
      topRunners.appendChild(li);
    });
  }, 1000);
}

function searchRaces() {
  const query = document.getElementById("search-query").value;
  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = "<li>Searching...</li>";

  setTimeout(() => {
    searchResults.innerHTML = "";
    const results = ["Search Result A", "Search Result B", "Search Result C"];
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result;
      searchResults.appendChild(li);
    });
  }, 1000);
}
