function Player(name, mark){
  var name = name;
  var mark = mark;

  function getMark(){
    return mark;
  }

  function getName(){
    return name;
  }

  return { getMark, getName }
} 