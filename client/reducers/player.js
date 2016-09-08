import { NEW_SCORE } from '../actions/new-score'

export default function newScorePlayer( state = {}, {type, payload}) {

  switch (type) {

    case NEW_SCORE :
      const {eyes, score, turn} = payload

      return Object.assign({}, state, {score: score, eyes: eyes, turn: turn })

    default :
      return state

  }

}
