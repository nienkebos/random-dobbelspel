import { USER_AUTHENTICATED } from '../actions/user-authenticated'
import { USER_SIGNED_OUT } from '../actions/user-signed-out'
import { NEW_SCORE } from '../actions/new-score'

export default function storeCurrentUser(
  state = JSON.parse(localStorage.getItem('memoryUser')) || {}, { type, payload }) {
  switch (type) {
    case USER_AUTHENTICATED :
      localStorage.setItem('memoryUser', JSON.stringify(payload))
      return payload

    case USER_SIGNED_OUT :
      localStorage.removeItem('memoryUser')
      return {}

    case NEW_SCORE :

      return Object.assign({}, state, {score: payload })

    default :
      return state
  }
}
