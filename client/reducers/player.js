import { NEW_SCORE } from '../actions/new-score'

export default function newScorePlayer( state = {}, {type, payload}) {

  switch (type) {

    case NEW_SCORE :
      const {eyes, score} = payload

      return Object.assign({}, state, {score: score, eyes: eyes })

    default :
      return state

  }

}
