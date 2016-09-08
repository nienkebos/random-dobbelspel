import diceRolled from './dice-rolled'
import newScore from './new-score'

export default function secondRoll(player) {
console.log(player.eyes);
  const newEyes = player.eyes.map(function(nr){
      if (nr == 1 || nr == 5) {
      return nr
      } else {
      return Math.floor((Math.random()*6)+1)
      }
    })

    const score = newEyes.map(function(no){
      if (no == 1){ return 100}
      else if (no == 5){ return 50}
      else { return 0};
    }).reduce((x, y) => x + y, 0)


  // function count(turn,num) {
  //   var count = 0;
  //   for(var i = 0; i < turn.length; ++i){
  //       if(turn[i] == num)
  //           count++;
  //   }
  //   return count;
  // }
  //
  // function checkDead(old,nw) {
  //   if (count(old,5) == count(nw,5) && count(old,1) == count(nw,1)) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }


  return dispatch => {

    dispatch(diceRolled(newEyes))
    dispatch(newScore(score, newEyes))

  }
}
