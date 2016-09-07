import diceRolled from './dice-rolled'
import newScore from './new-score'

export default function createGame(game) {

  const eyes = [];

  for (var i=0; i<6; ++i){
    var randomNr = Math.floor((Math.random()*6)+1);
    eyes.push(randomNr);
  };

  //count score
  const score = eyes.map(function(no){
    if (no == 1){ return 100}
    else if (no == 5){ return 50}
    else { return 0};
  }).reduce((x, y) => x + y, 0)

  return dispatch => {

    dispatch(diceRolled(eyes))
    dispatch(newScore(score))

  }
}
