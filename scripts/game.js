game = (function(gameBoard, players, display){
  var board = gameBoard;
  var player1 = players[0];
  var player2 = players[1];
  var activePlayer = player1;
  var display = display;

  function turn(coordinate){
    board.addMark(activePlayer.getMark(),coordinate);
    display.renderBoard(board.getBoard());
  }

  return { turn }

})(gameBoard, [Player('thomas','x'), Player('stephen','o')], toDisplay);

