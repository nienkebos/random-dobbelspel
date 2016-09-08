
import diceRolled from './dice-rolled'
import newScore from './new-score'

export default function secondRoll(game) {



  return dispatch => {

    dispatch(diceRolled(eyes))
    dispatch(newScore(score))

  }
}
