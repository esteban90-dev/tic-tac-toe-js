gameBoard = (function(){
  var boardArr = ["","","","","","","","",""];
  var buttons = document.querySelectorAll("button");
  var activeMark = 'x';
  
  //add event listeners
  for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () => {
      _addMarkToBoardArr(activeMark, buttons[i].getAttribute("id"));
    });
  }
  
  function _addMarkToBoardArr(mark, coordinate){
    boardArr[coordinate] = mark;
    console.log(boardArr);
    _render();
  }
  
  function _render(){
    for(let i=0; i<buttons.length; i++){
      buttons[i].innerText = boardArr[i];
    }
  }
  
})();