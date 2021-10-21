const eventHandler = (function(game,playerFactory){
  const boardButtons = document.querySelectorAll("button");
  const form = document.querySelector("form");
  const playButton = document.querySelector("#play");
  const player1xButton = document.querySelector("#player-1-mark-x");
  const player1oButton = document.querySelector("#player-1-mark-o");
  const player2xButton = document.querySelector("#player-2-mark-x");
  const player2oButton = document.querySelector("#player-2-mark-o");
  const radioButtons = [player1xButton, player1oButton, player2xButton, player2oButton];
  const resetButton = document.querySelector("#reset");
  const message = document.querySelector("#message");
  var game = game;
  var playerFactory = playerFactory;

  //add event listeners
  
  _addBoardButtonListeners();
  _addRadioButtonListeners();
  form.addEventListener("submit",_handleSubmit);
  resetButton.addEventListener('click',_handleReset);

  function _addBoardButtonListeners(){
    for(let i=0; i<boardButtons.length; i++){
      boardButtons[i].addEventListener('click', _handleBoardClick);
    }
  }

  function _addRadioButtonListeners(){
    for(let i=0; i<radioButtons.length; i++){
      radioButtons[i].addEventListener('click',_handleRadioClick);
    }
  }

  function _handleBoardClick(event){
    game.turn(event.target.getAttribute("id"));

    //disable the button once clicked
    event.target.removeEventListener('click', _handleBoardClick);
  }

  function _handleSubmit(event){
    var formData = new FormData(event.target);
    var player1Name = formData.get("player-1-name");
    var player1Mark = formData.get("player-1-mark");
    var player2Name = formData.get("player-2-name");
    var player2Mark = formData.get("player-2-mark");
    game.init(playerFactory(player1Name,player1Mark), playerFactory(player2Name,player2Mark));

    event.preventDefault();
  }

  function _handleRadioClick(event){
    //if player 1 selects 'x', force player 2 to 'o'
    if(event.target === player1xButton){
      //uncheck player 2's 'x' and check player 2's 'o'
      player2xButton.checked = false;
      player2oButton.checked = true;
    }

    //if player 1 selects 'o', force player 2 to 'x'
    if(event.target === player1oButton){
      //uncheck player 2's 'o' and check player 2's 'x'
      player2oButton.checked = false;
      player2xButton.checked = true;
    }

    //if player 2 selects 'x', force player 1 to 'o'
    if(event.target === player2xButton){
      //uncheck player 1's 'x' and check player 1's 'o'
      player1xButton.checked = false;
      player1oButton.checked = true;
    }

    //if player 2 selects 'o', force player 1 to 'x'
    if(event.target === player2oButton){
      //uncheck player 1's 'o' and check player 1's 'x'
      player1oButton.checked = false;
      player1xButton.checked = true;
    }
  }

  function _handleReset(event){
    //clear the board buttons
    for(let i=0; i<boardButtons.length; i++){
      boardButtons[i].innerHTML = "";
    }

    //add listeners back to board buttons
    _addBoardButtonListeners();

    //clear the message element
    message.innerHTML = "";

    //enable the play button
    playButton.removeAttribute("disabled");

    //hide the reset button
    resetButton.classList.add("display-none");
  }

})(game,Player);