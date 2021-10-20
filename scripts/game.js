game = (function(gameBoard, displayUpdater){
  var board = gameBoard;
  var players;
  var activePlayer;
  var displayUpdater = displayUpdater;

  function turn(coordinate){
    //add mark to the board object
    board.addMark(activePlayer.getMark(),coordinate);

    //switch active player
    if (activePlayer === players[0]){
      activePlayer = players[1];
    } else {
      activePlayer = players[0];
    }

    //update the board display
    displayUpdater.renderBoard(board.getBoard());
  }

  function init(player1, player2){
    players = [player1,player2];
    activePlayer = players[0];
    displayUpdater.enableBoardButtons();
    displayUpdater.disablePlayButton();
  }

  return { turn, init }

})(gameBoard, displayUpdater);

