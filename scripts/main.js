gameBoard = (function(){
  var boardArr = ["","","","","","","","",""];
  
  function addMark(mark, coordinate){
    boardArr[coordinate] = mark;
  }

  function getMark(coordinate){
    return boardArr[coordinate];
  }

  function _hasHorizontalWinner(){
    if( (boardArr[0]) && boardArr[1] && boardArr[2] ){
      if( (boardArr[0] === boardArr[1]) && (boardArr[0] === boardArr[2]) ){
        return boardArr[0];
      }
    }

    if( (boardArr[3]) && boardArr[4] && boardArr[5] ){
      if( (boardArr[3] === boardArr[4]) && (boardArr[3] === boardArr[5]) ){
        return boardArr[3];
      }
    }

    if( (boardArr[6]) && boardArr[7] && boardArr[8] ){
      if( (boardArr[6] === boardArr[7]) && (boardArr[6] === boardArr[8]) ){
        return boardArr[6];
      }
    }

    return false;
  }

  function _hasVerticalWinner(){
    if( (boardArr[0]) && boardArr[3] && boardArr[6] ){
      if( (boardArr[0] === boardArr[3]) && (boardArr[0] === boardArr[6]) ){
        return boardArr[0];
      }
    }

    if( (boardArr[1]) && boardArr[4] && boardArr[7] ){
      if( (boardArr[1] === boardArr[4]) && (boardArr[1] === boardArr[7]) ){
        return boardArr[1];
      }
    }

    if( (boardArr[2]) && boardArr[5] && boardArr[8] ){
      if( (boardArr[2] === boardArr[5]) && (boardArr[2] === boardArr[8]) ){
        return boardArr[2];
      }
    }

    return false;
  }

  function _hasDiagonalWinner(){
    if( (boardArr[0]) && boardArr[4] && boardArr[8] ){
      if( (boardArr[0] === boardArr[4]) && (boardArr[0] === boardArr[8]) ){
        return boardArr[0];
      }
    }

    if( (boardArr[2]) && boardArr[4] && boardArr[6] ){
      if( (boardArr[2] === boardArr[4]) && (boardArr[2] === boardArr[6]) ){
        return boardArr[2];
      }
    }

    return false;
  }
  
  function hasWinner(){
    return _hasHorizontalWinner() || _hasVerticalWinner() || _hasDiagonalWinner();
  }

  function hasTie(){
    if(!hasWinner() && boardArr.join("").length == 9){
      return true;
    }
  }
  
  return { addMark, getMark, hasWinner, hasTie };
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