const DisplayUpdater = (function(){
  const boardButtons = document.querySelectorAll("button");
  const playButton = document.querySelector("#play");
  const resetButton = document.querySelector("#reset");
  const message = document.querySelector("#message");
  
  function renderBoard(boardArr){
    for(let i=0; i<boardButtons.length; i++){
      boardButtons[i].innerText = boardArr[i];
    }
  }

  function disableBoardButtons(){
    for(let i=0; i<boardButtons.length; i++){
      boardButtons[i].setAttribute("disabled", "");
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

  function enablePlayButton(){
    playButton.removeAttribute("disabled");
  }

  function displayResetButton(){
    resetButton.classList.remove("display-none");
  }

  function displayPlayerTurn(name){
    message.innerHTML = "It's " + name + "'s turn";
  }

  function displayWinner(name){
    message.innerHTML = name + " won the game!";
  }

  function displayTie(){
    message.innerHTML = "The game is a tie!";
  }

  return { renderBoard, disableBoardButtons, enableBoardButtons, disablePlayButton, displayResetButton, displayPlayerTurn, displayWinner, displayTie }
})();