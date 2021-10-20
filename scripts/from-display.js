fromDisplay = (function(game,playerFactory){
  var boardButtons = document.querySelectorAll("button");
  var form = document.querySelector("form");
  var game = game;
  var playerFactory = playerFactory;
  var player1xButton = document.querySelector("#player-1-mark-x");
  var player1oButton = document.querySelector("#player-1-mark-o");
  var player2xButton = document.querySelector("#player-2-mark-x");
  var player2oButton = document.querySelector("#player-2-mark-o");
  var radioButtons = [player1xButton, player1oButton, player2xButton, player2oButton];

  //add event listeners
  for(let i=0; i<boardButtons.length; i++){
    boardButtons[i].addEventListener('click', _handleBoardClick);
  }

  form.addEventListener("submit",_handleSubmit);

  for(let i=0; i<radioButtons.length; i++){
    radioButtons[i].addEventListener('click',_handleRadioClick);
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

})(game,Player);