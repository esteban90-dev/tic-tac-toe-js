const Game = (function(GameBoard, players, DisplayUpdater){
  var board = GameBoard;
  var players = players;
  var activePlayer;
  var DisplayUpdater = DisplayUpdater;

  function turn(coordinate){
    //add mark to the board object
    board.addMark(activePlayer.getMark(),coordinate);

    //determine if game over
    if(board.hasWinner()){
      DisplayUpdater.displayWinner(activePlayer.getName());
      _endGame();
    } else if(board.hasTie()){
      DisplayUpdater.displayTie();
      _endGame();
    } else {
      //switch active player
      if (activePlayer === players[0]){
        activePlayer = players[1];
      } else {
        activePlayer = players[0];
      }

      DisplayUpdater.displayPlayerTurn(activePlayer.getName());
    }

    //update board display
    DisplayUpdater.renderBoard(board.getBoard());
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

    DisplayUpdater.enableBoardButtons();
    DisplayUpdater.disablePlayButton();
    DisplayUpdater.displayPlayerTurn(activePlayer.getName());
  }

  function _endGame(){
    DisplayUpdater.displayResetButton();
    DisplayUpdater.disableBoardButtons();
  }

  return { turn, init }

})(GameBoard, [], DisplayUpdater);

