toDisplay = (function(){
  buttons = document.querySelectorAll("button");
  
  function renderBoard(boardArr){
    for(let i=0; i<buttons.length; i++){
      buttons[i].innerText = boardArr[i];
    }
  }

  return { renderBoard }
})();