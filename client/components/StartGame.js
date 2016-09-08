import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Game from '../containers/Game'

import createGame from '../actions/create-game'


// Material UI Components
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import headerStyle from '../styles/headers'


const buttonStyle = {
  float: 'center',
  marginLeft: '35%',
}

class StartGame extends Component {
  constructor() {
    super()

    this.state = {
      startGame: false
    }
  }

  toggleStartGame() {
    this.setState({
      startGame: !this.state.startGame
    })
  }

  render() {
    const { startGame } = this.state

    return(
      <div>
      { startGame == false ?
      <div>
        <h1>RANDOM DICE GAME</h1>
        <div>
          <RaisedButton
          style={ buttonStyle }
          onClick={ this.toggleStartGame.bind(this) }
          label={ 'Peace man! Throw some dice!' }
          primary={true} />
        </div>
      </div> :
      <div>
        <Game />
      </div> }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    dice: state.dice,
  }
}

StartGame.propTypes = {
  dice: PropTypes.array.isRequired,
  createGame: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { createGame }) (StartGame)
