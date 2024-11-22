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
        let start = new Date().getTime()
        var count = 0;
        var gameListElement;
        // Build an side nav item for every object in each array
        // HTML GAMES 
        for (let x in jsonData.HTML) {
          gameListElement = document.createElement("a");
          gameListElement.setAttribute("onClick", 'openGame("' + jsonData.HTML[x].link + '")');
          gameListElement.innerHTML = jsonData.HTML[x].title;
          document.getElementById("HTMLGameList").appendChild(gameListElement);
          // console.log("Created navItem: " + jsonData.HTML[x].title); // For Debugging
          count++;
      }
        // FLASH GAMES
        for (let x in jsonData.FLASH) {
          gameListElement = document.createElement("a");
          gameListElement.setAttribute("onClick", 'openGame("' + jsonData.FLASH[x].link + '")');
          gameListElement.innerHTML = jsonData.FLASH[x].title;
          document.getElementById("FlashGameList").appendChild(gameListElement);
          // console.log("Created navItem: " + jsonData.FLASH[x].title); // For Debugging
          count++;
        }
        // NDS GAMES
        for (let x in jsonData.NDS) {
          gameListElement = document.createElement("a");
          gameListElement.setAttribute("onClick", 'openGame("' + jsonData.NDS[x].link + '")');
          gameListElement.innerHTML = jsonData.NDS[x].title;
          document.getElementById("NDSGameList").appendChild(gameListElement);
          // console.log("Created navItem: " + jsonData.NDS[x].title); // For Debugging
          count++;
        }
        // GBA GAMES
        for (let x in jsonData.GBA) {
          gameListElement = document.createElement("a");
          gameListElement.setAttribute("onClick", 'openGame("' + jsonData.GBA[x].link + '")');
          gameListElement.innerHTML = jsonData.GBA[x].title;
          document.getElementById("GBAGameList").appendChild(gameListElement);
          // console.log("Created navItem: " + jsonData.GBA[x].title); // For Debugging
          count++;
        }
        // N64 GAMES
        for (let x in jsonData.N64) {
          gameListElement = document.createElement("a");
          gameListElement.setAttribute("onClick", 'openGame("' + jsonData.N64[x].link + '")');
          gameListElement.innerHTML = jsonData.N64[x].title;
          document.getElementById("N64GameList").appendChild(gameListElement);
          // console.log("Created navItem: " + jsonData.N64[x].title); // For Debugging
          count++;
        }
        // NES GAMES
        for (let x in jsonData.NES) {
          gameListElement = document.createElement("a");
          gameListElement.setAttribute("onClick", 'openGame("' + jsonData.NES[x].link + '")');
          gameListElement.innerHTML = jsonData.NES[x].title;
          document.getElementById("NESGameList").appendChild(gameListElement);
          // console.log("Created navItem: " + jsonData.NES[x].title); // For Debugging
          count++;
        }
        // SNES GAMES
        for (let x in jsonData.SNES) {
          gameListElement = document.createElement("a");
          gameListElement.setAttribute("onClick", 'openGame("' + jsonData.SNES[x].link + '")');
          gameListElement.innerHTML = jsonData.SNES[x].title;
          document.getElementById("SNESGameList").appendChild(gameListElement);
          // console.log("Created navItem: " + jsonData.SNES[x].title); // For Debugging
          count++;
        }
        // JSDOS GAMES
        for (let x in jsonData.JSDOS) {
          gameListElement = document.createElement("a");
          gameListElement.setAttribute("onClick", 'openGame("' + jsonData.JSDOS[x].link + '")');
          gameListElement.innerHTML = jsonData.JSDOS[x].title;
          document.getElementById("JSDOSGameList").appendChild(gameListElement);
          // console.log("Created navItem: " + jsonData.JSDOS[x].title); // For Debugging
          count++;
        }
        let difference = new Date().getTime() - start; // final-initial=Δtime
        console.log(count + " Navigation Items Built in: " + difference + "ms");
      })
}
fetchJSONData(); // Call the function
