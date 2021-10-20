fromDisplay = (function(game,playerFactory){
  var boardButtons = document.querySelectorAll("button");
  var form = document.querySelector("form");
  var game = game;
  var playerFactory = playerFactory;

  //add event listeners
  for(let i=0; i<boardButtons.length; i++){
    boardButtons[i].addEventListener('click', _handleClick);
  }

  form.addEventListener("submit",_handleSubmit);

  function _handleClick(event){
    game.turn(event.target.getAttribute("id"));

    //disable the button once clicked
    event.target.removeEventListener('click', _handleClick);
  }

  function _handleSubmit(event){
    var formData = new FormData(event.target);
    player1Name = formData.get("player-1");
    player2Name = formData.get("player-2");
    game.init(playerFactory(player1Name,'x'), playerFactory(player2Name,'o'));

    event.preventDefault();
  }

})(game,Player);