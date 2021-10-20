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

    //update display
    displayUpdater.renderBoard(board.getBoard());
    displayUpdater.displayPlayerTurn(activePlayer.getName());
  }

  function init(player1, player2){
    players = [player1,player2];
    
    //player with 'x' mark goes first
    if (players[0].getMark() === 'x'){
      activePlayer = players[0];
    } else {
      activePlayer = players[1];
    }

    displayUpdater.enableBoardButtons();
    displayUpdater.disablePlayButton();
    displayUpdater.displayPlayerTurn(activePlayer.getName());
  }

  return { turn, init }

})(gameBoard, displayUpdater);

