/* 
  Add funtionality here
  - Fullscreen gs
  - Fetching link and assigning to iFrame
  - Expand / Colapse Side Nav Categories  
*/

function openg(gLink) {
  document.getElementById("content").innerHTML = "";
  var giframe = document.createElement("iframe");
  giframe.id = "giframe"
  giframe.style.border = "none";
  giframe.style.margin = "0";
  giframe.width = "100%";
  giframe.height = "98%";
  giframe.src = gLink;
  document.getElementById("content").appendChild(giframe);
}

/* Fullscreen Button Functionality */
var win;
var btn = document.getElementById("fullscreenBtn");
btn.onclick=function(){
  if(win){ // if it already exists
    win.focus()
  }
  else{ // Create a new window
    if (document.getElementById("giframe").src) {
      win = window.open();
      win.document.body.style.margin = "0";
      win.document.body.style.height = "100vh";
      
      var gwindow = win.document.createElement("iframe");
      gwindow.style.border = "none";
      gwindow.style.width = "100%";
      gwindow.style.height = "100%";
      gwindow.style.margin = "0";
      gwindow.src = document.getElementById("giframe").src;
      win.document.body.appendChild(gwindow);
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