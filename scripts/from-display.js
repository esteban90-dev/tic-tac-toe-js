fromDisplay = (function(game){
  var buttons = document.querySelectorAll("button");
  var game = game;

  //add event listeners
  for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', _handleClick);
  }

  function _handleClick(event){
    game.turn(event.target.getAttribute("id"));
  }
})(game);