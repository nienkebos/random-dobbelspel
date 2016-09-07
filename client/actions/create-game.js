export const CREATE_GAME = 'CREATE_GAME'

export default function createGame(game) {
  return {
    type: CREATE_GAME,
    payload: game,
  }
}
