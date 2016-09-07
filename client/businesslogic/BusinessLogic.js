var a = [];

for (var i=0; i<6; ++i){
  var randomNr = Math.floor((Math.random()*6)+1);
  a.push(randomNr);
};

function turn(x) {
  newTurn = x.map(function(nr){
    if (nr == 1 || nr == 5) {
    return nr
    } else {
    return Math.floor((Math.random()*6)+1)
    }
  });
  console.log(checkDead(x,newTurn));
  return newTurn
}

function count(turn,num) {
  var count = 0;
  for(var i = 0; i < turn.length; ++i){
      if(turn[i] == num)
          count++;
  }
  return count;
}

function checkDead(old,nw) {
  if (count(old,5) == count(nw,5) && count(old,1) == count(nw,1)) {
    return true
  } else {
    return false
  }
}
