/* 
  Add funtionality here
  - Fullscreen games
  - Fetching link and assigning to iFrame
  - Expand / Colapse Side Nav Categories  
*/

function openGame(gameLink) {
  document.getElementById("content").innerHTML = "";
  var gameiframe = document.createElement("iframe");
  gameiframe.id = "gameiframe"
  gameiframe.style.border = "none";
  gameiframe.style.margin = "0";
  gameiframe.width = "100%";
  gameiframe.height = "98%";
  gameiframe.src = gameLink;
  document.getElementById("content").appendChild(gameiframe);
}

/* Fullscreen Button Functionality */
var win;
var btn = document.getElementById("fullscreenBtn");
btn.onclick=function(){
  if(win){ // if it already exists
    win.focus()
  }
  else{ // Create a new window
    if (document.getElementById("gameiframe").src) {
      win = window.open();
      win.document.body.style.margin = "0";
      win.document.body.style.height = "100vh";
      
      var gamewindow = win.document.createElement("iframe");
      gamewindow.style.border = "none";
      gamewindow.style.width = "100%";
      gamewindow.style.height = "100%";
      gamewindow.style.margin = "0";
      gamewindow.src = document.getElementById("gameiframe").src;
      win.document.body.appendChild(gamewindow);
      var a = setInterval( // Closed and prompt reopenning
        function() {
          if(win.closed){
            clearInterval(a);
            win = undefined;
          }
        },500
      );
    }
  }
}