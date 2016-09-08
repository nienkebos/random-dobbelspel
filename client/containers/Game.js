import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import createGame from '../actions/create-game'
import secondRoll from '../actions/second-roll'

// Components
import Dice from '../components/Dice'
import Scoreboard from '../containers/Scoreboard'

// Material UI Components
import { GridList } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 450,
    height: 320,
    overflowY: 'auto',
    marginBottom: 0,
  },
  pussy: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '-100%',
    backgroundImage: "url('../assets/pussy.jpg')",
    backgroundSize: '100%',
  },
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

class Game extends Component {
  componentDidMount() {
    this.props.createGame()
  }

  rollAgain() {
    const { player } = this.props
    this.props.secondRoll(player)
  }

  aPussy() {
    console.log('hoiii');
  }

  renderDice(dice, index) {
    return (
      <Dice key={ index }
        index={ index } { ...dice } />
    )
  }

  render() {
    const { dice, player } = this.props

    return (
      <div>
        <div id='pussy' style={ styles.pussy }></div>
        <div style={ styles.root }>
          <GridList cellHeight={ 150 } cols={ 3 } style={ styles.gridList }>
            { dice.map(this.renderDice.bind(this)) }
          </GridList>
          </div>
          <div>
            <Scoreboard />
          </div>

          { player.turn == 3 ?
            <div>
              <RaisedButton
                style={ buttonStyle }
                // onClick={  }
                label={ 'Next!' }
                primary={true} />
            </div> :
            <div>
              <RaisedButton
                style={ buttonStyle }
                onClick={ this.rollAgain.bind(this) }
                label={ 'Dobbelen!' }
                primary={true} />
            </div>
          }
          <div>
            <RaisedButton
              style={ buttonStyle }
              onClick={ this.aPussy.bind(this) }
              label={ 'I am a pussy...' }
              primary={true} />
          </div>

        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dice: state.dice,
    player: state.player,
  }
}

Game.propTypes = {
  dice: PropTypes.array.isRequired,
  createGame: PropTypes.func.isRequired,
  secondRoll: PropTypes.func.isRequired,

}

export default connect(mapStateToProps, { createGame, secondRoll })(Game)
