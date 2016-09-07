import { CREATE_GAME } from '../actions/create-game'

export default function updateGame( state = [], { type, payload } ) {
  switch (type) {
    case CREATE_GAME :
      const eyes = '123456'.split('')
      return eyes
        .map((eyes) => ({ eyes: eyes }))

    default :
      return state
  }
}
