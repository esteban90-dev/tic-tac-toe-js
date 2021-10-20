var displayUpdater = (function(){
  var boardButtons = document.querySelectorAll("button");
  var playButton = document.querySelector("#play");
  
  function renderBoard(boardArr){
    for(let i=0; i<boardButtons.length; i++){
      boardButtons[i].innerText = boardArr[i];
    }
  }

  function enableBoardButtons(){
    for(let i=0; i<boardButtons.length; i++){
      boardButtons[i].removeAttribute("disabled");
    }
  }

  function disablePlayButton(){
    playButton.setAttribute("disabled","");
  }

  return { renderBoard, enableBoardButtons, disablePlayButton }
})();