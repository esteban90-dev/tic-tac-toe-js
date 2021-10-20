game = (function(gameBoard, display){
  var board = gameBoard;
  var players;
  var activePlayer;
  var display = display;

  function turn(coordinate){
    //add mark to the board object
    console.log(activePlayer);
    board.addMark(activePlayer.getMark(),coordinate);

    //switch active player
    if (activePlayer === players[0]){
      activePlayer = players[1];
    } else {
      activePlayer = players[0];
    }

    //update the board display
    display.renderBoard(board.getBoard());
  }

  function init(player1, player2){
    players = [player1,player2];
    activePlayer = players[0];
    display.enableBoardButtons();
    display.disablePlayButton();
  }

  return { turn, init }

})(gameBoard, toDisplay);

