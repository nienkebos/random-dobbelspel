import { CREATE_GAME } from '../actions/create-game'

export default function updateGame( state = [], { type, payload } ) {
  switch (type) {
    case CREATE_GAME :

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

      return eyes.map((eyes) => ({ eyes: eyes }))

    default :
      return state
  }
}
