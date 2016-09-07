import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Material UI Components
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import headerStyle from '../styles/headers'


class StartGame extends Component {
  render() {
    // TODO: link to Game
    return(
      <div>
        <h1>Round 1</h1>
        <div>
          <FlatButton label={ Game }/>

        </div>
      </div>
    )
  }
}

export default StartGame
