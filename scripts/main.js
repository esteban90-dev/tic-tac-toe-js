gameBoard = (function(){
  var boardArr = ["","","","","","","","",""];
  
  function addMark(mark, coordinate){
    boardArr[coordinate] = mark;
  }

  function getMark(coordinate){
    return boardArr[coordinate];
  }
  
  function hasWinner(){
    //horizontal winner - 0,1,2
    if(boardArr[0] && boardArr[1] && boardArr[2]){
      if((boardArr[0] === boardArr[1]) && (boardArr[0] === boardArr[2])){
        return boardArr[0];
      }
    }
    //vertical winner
    //diagonal winner
  }
  
  return { addMark, getMark };
})();

game = (function(){
  var buttons = document.querySelectorAll("button");
  var activeMark = 'x';
  var board = gameBoard;

  //add event listeners
  for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
      _handleMark(i);
    });
  }

  function _handleMark(coordinate){
    board.addMark(activeMark, buttons[coordinate].getAttribute("id"));
    _render();
  }

  function _render(){
    for(let i=0; i<buttons.length; i++){
      buttons[i].innerText = board.getMark(i);
    }
  }
})(gameBoard);