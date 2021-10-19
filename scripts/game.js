game = (function(gameBoard, players){
  var buttons = document.querySelectorAll("button");
  var board = gameBoard;
  var player1 = players[0];
  var player2 = players[1];
  var activePlayer = player1;

  //add event listeners
  for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
      _handleMark(i);
    });
  }

  function _handleMark(coordinate){
    board.addMark(activePlayer.getMark(), buttons[coordinate].getAttribute("id"));
    _render();
  }

  function _render(){
    for(let i=0; i<buttons.length; i++){
      buttons[i].innerText = board.getMark(i);
    }
  }
})(gameBoard, [Player('thomas','x'), Player('stephen','o')]);

