game = (function(gameBoard, players, display){
  var board = gameBoard;
  var player1 = players[0];
  var player2 = players[1];
  var activePlayer = player1;
  var display = display;

  function turn(coordinate){
    board.addMark(activePlayer.getMark(),coordinate);

    //switch active player
    if (activePlayer == player1){
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }

    display.renderBoard(board.getBoard());
  }

  return { turn }

})(gameBoard, [Player('thomas','x'), Player('stephen','o')], toDisplay);

