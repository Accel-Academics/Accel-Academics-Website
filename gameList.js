// Side Navigation Game List Builder
function fetchJSONData() {
  fetch("/games.json") // Fetch the json file
    .then((res) => {
      if (!res.ok) { 
        throw new Error
          (`HTTP error! Status: ${res.status}`); // Just in case
      }
      return res.json();
    })
    .then((jsonData) =>
      {
        // Build an item for every object in the array 
        for (let x in jsonData.games) {
          gameListElement = document.createElement("a");
          gameListElement.href = jsonData.games[x].link;
          gameListElement.innerHTML = jsonData.games[x].title;
          document.getElementById("gameList").appendChild(gameListElement);
          console.log("Created navItem: " + jsonData.games[x].title); // For Debugging
        }
      })
}
fetchJSONData(); // Call the function
