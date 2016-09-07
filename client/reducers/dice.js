import { DICE_ROLLED } from '../actions/dice-rolled'

export default function updateGame( state = [], { type, payload } ) {
  switch (type) {
    case DICE_ROLLED :

      return payload.map((eyes) => ({ eyes: eyes }))

    default :
      return state
  }
}
