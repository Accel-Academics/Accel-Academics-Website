/* 
  Add funtionality here
  - Fullscreen games
  - Fetching link and assigning to iFrame
  - Expand / Colapse Side Nav Categories  
*/
/* Add Game iFrame Function (Called when nav menu clicked) */

function openGame(gameLink) {
  document.getElementById("content").innerHTML = "";
  var gameiframe = document.createElement("iframe");
  gameiframe.style.border = "none";
  gameiframe.style.margin = "0";
  gameiframe.width = "100%";
  gameiframe.height = "98%";
  gameiframe.src = gameLink;
  document.getElementById("content").appendChild(gameiframe);
}

/* Fullscreen Button Functionality */
var win;
function fullscreen() {
  var titleText=document.getElementById("titleText");
  titleText.textContent="Press Button to Launch "+appName;
  document.getElementById("fullscreenBtn").onclick=function(){
    if(win){ // if it already exists
      win.focus()
    }
    else{ // Create a new window
      win = window.open();
      win.document.body.style.margin = "0";
      win.document.body.style.height = "100vh";
      // var c=win.document.createElement("div");
      // c.innerHTML = "If keyboard controls don't function click <a href='javascript:document.querySelector(%27iframe%27).focus()%3B'>here</a>.&nbsp;&nbsp;<a href='javascript:document.querySelector(%27div%27).remove()%3B' style='color:grey; text-decoration: none;'>X</a>";
      // c.style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
      // c.style.textAlign='center';
      // win.document.body.appendChild(c);

      var gamewindow = win.document.createElement("iframe");
      gamewindow.style.border = "none";
      gamewindow.style.width = "100%";
      gamewindow.style.height = "100%";
      gamewindow.style.margin = "0";
      gamewindow.src = url;
      win.document.body.appendChild(gamewindow);
      var a = setInterval( // Closed and prompt reopenning
        function() {
          if(win.closed){
            clearInterval(a);
            win = undefined;
            titleText.textContent = "Reopen";
          }
        },500
      );
      titleText.textContent = "Open Window";
    }
  }
}