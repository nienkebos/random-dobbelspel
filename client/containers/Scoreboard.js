import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// import newScore from '..actions/new-score'


class Scoreboard extends Component {

  render() {
    const { player } = this.props
// console.log(player);
    // TODO: const { score } and action score
    return(
      <div>
        <h4>Scoreboard</h4>
        <h2>{ player.score }</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.player,
  }
}
//
// Scoreboard.propTypes = {
//   player: PropTypes.array.isRequired,
// }


export default connect(mapStateToProps)(Scoreboard)
// export default Scoreboard
