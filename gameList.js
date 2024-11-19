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
        // Build an side nav item for every object each array
        // HTML GAMES 
        for (let x in jsonData.html) {
          gameListElement = document.createElement("a");
          gameListElement.href = jsonData.html[x].link;
          gameListElement.innerHTML = jsonData.html[x].title;
          document.getElementById("HTMLGameList").appendChild(gameListElement);
          console.log("Created navItem: " + jsonData.html[x].title); // For Debugging
        }
        // FLASH GAMES
        for (let x in jsonData.flash) {
          gameListElement = document.createElement("a");
          gameListElement.href = jsonData.flash[x].link;
          gameListElement.innerHTML = jsonData.flash[x].title;
          document.getElementById("FlashGameList").appendChild(gameListElement);
          console.log("Created navItem: " + jsonData.flash[x].title); // For Debugging
        }
      })
}
fetchJSONData(); // Call the function
