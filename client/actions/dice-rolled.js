export const DICE_ROLLED = 'DICE_ROLLED'

export default function diceRolled(eyes) {
  return {
    type: DICE_ROLLED,
    payload: eyes,
  }
}
