export const NEW_SCORE = 'NEW_SCORE'

export default function newScore(score,eyes) {
  return {
    type: NEW_SCORE,
    payload: { score, eyes }
  }
}
