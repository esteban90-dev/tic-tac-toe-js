game = (function(gameBoard, players, displayUpdater){
  var board = gameBoard;
  var players = players;
  var activePlayer;
  var displayUpdater = displayUpdater;

  function turn(coordinate){
    //add mark to the board object
    board.addMark(activePlayer.getMark(),coordinate);

    //determine if game over
    if(board.hasWinner()){
      displayUpdater.displayWinner(activePlayer.getName());
      _endGame();
    } else if(board.hasTie()){
      displayUpdater.displayTie();
      _endGame();
    } else {
      //switch active player
      if (activePlayer === players[0]){
        activePlayer = players[1];
      } else {
        activePlayer = players[0];
      }

      displayUpdater.displayPlayerTurn(activePlayer.getName());
    }

    //update board display
    displayUpdater.renderBoard(board.getBoard());
  }

  function init(player1, player2){
    board.clear();
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

  function _endGame(){
    displayUpdater.displayResetButton();
    displayUpdater.disableBoardButtons();
  }

  return { turn, init }

})(gameBoard, [], displayUpdater);

