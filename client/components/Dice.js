import React, { Component, PropTypes } from 'react'
import { GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    height: 130,
    width: 130,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
  },
  symbol: {
    fontSize: '3rem',
  }
}

class Dice extends Component {

  render() {
    const { eyes } = this.props

    return (
      <GridTile>
        <Paper style={ style.paper } zDepth={1}>
          <h1 style={ style.eyes }></h1>
        </Paper>
      </GridTile>
    )
  }
}

Dice.propTypes = {
  index: PropTypes.number.isRequired,
  eyes: PropTypes.string.isRequired,
}

export default Dice
