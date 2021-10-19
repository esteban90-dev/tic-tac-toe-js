function Player(name, mark){
  var name = name;
  var mark = mark;

  function getMark(){
    return mark;
  }

  return { getMark }
}