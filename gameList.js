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
        for (let x in jsonData.HTML) {
          gameListElement = document.createElement("a");
          gameListElement.href = jsonData.HTML[x].link;
          gameListElement.innerHTML = jsonData.HTML[x].title;
          document.getElementById("HTMLGameList").appendChild(gameListElement);
          console.log("Created navItem: " + jsonData.HTML[x].title); // For Debugging
        }
        // FLASH GAMES
        for (let x in jsonData.FLASH) {
          gameListElement = document.createElement("a");
          gameListElement.href = jsonData.FLASH[x].link;
          gameListElement.innerHTML = jsonData.FLASH[x].title;
          document.getElementById("FlashGameList").appendChild(gameListElement);
          console.log("Created navItem: " + jsonData.FLASH[x].title); // For Debugging
        }
        // NDS GAMES
        for (let x in jsonData.NDS) {
          gameListElement = document.createElement("a");
          gameListElement.href = jsonData.NDS[x].link;
          gameListElement.innerHTML = jsonData.NDS[x].title;
          document.getElementById("NDSGameList").appendChild(gameListElement);
          console.log("Created navItem: " + jsonData.NDS[x].title); // For Debugging
        }
        // GBA GAMES
        for (let x in jsonData.GBA) {
          gameListElement = document.createElement("a");
          gameListElement.href = jsonData.GBA[x].link;
          gameListElement.innerHTML = jsonData.GBA[x].title;
          document.getElementById("GBAGameList").appendChild(gameListElement);
          console.log("Created navItem: " + jsonData.GBA[x].title); // For Debugging
        }
        // N64 GAMES
        for (let x in jsonData.N64) {
          gameListElement = document.createElement("a");
          gameListElement.href = jsonData.N64[x].link;
          gameListElement.innerHTML = jsonData.N64[x].title;
          document.getElementById("N64GameList").appendChild(gameListElement);
          console.log("Created navItem: " + jsonData.N64[x].title); // For Debugging
        }
        // NES GAMES
        for (let x in jsonData.NES) {
          gameListElement = document.createElement("a");
          gameListElement.href = jsonData.NES[x].link;
          gameListElement.innerHTML = jsonData.NES[x].title;
          document.getElementById("NESGameList").appendChild(gameListElement);
          console.log("Created navItem: " + jsonData.NES[x].title); // For Debugging
        }
        // SNES GAMES
        for (let x in jsonData.SNES) {
          gameListElement = document.createElement("a");
          gameListElement.href = jsonData.SNES[x].link;
          gameListElement.innerHTML = jsonData.SNES[x].title;
          document.getElementById("SNESGameList").appendChild(gameListElement);
          console.log("Created navItem: " + jsonData.SNES[x].title); // For Debugging
        }
        // JSDOS GAMES
        for (let x in jsonData.JSDOS) {
          gameListElement = document.createElement("a");
          gameListElement.href = jsonData.JSDOS[x].link;
          gameListElement.innerHTML = jsonData.JSDOS[x].title;
          document.getElementById("JSDOSGameList").appendChild(gameListElement);
          console.log("Created navItem: " + jsonData.JSDOS[x].title); // For Debugging
        }
      })
}
fetchJSONData(); // Call the function
