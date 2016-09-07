import React, { Component, PropTypes } from 'react'
import { GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

const style = {
  paper1: {
    height: 130,
    width: 130,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    background: "url('./assets/Dice-1.svg')",
    backgroundSize: '130px',
  },
  paper2: {
    height: 130,
    width: 130,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    background: "url('./assets/Dice-2.svg')",
    backgroundSize: '130px',
  },
  paper3: {
    height: 130,
    width: 130,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    background: "url('./assets/Dice-3.svg')",
    backgroundSize: '130px',
  },
  paper4: {
    height: 130,
    width: 130,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    background: "url('./assets/Dice-4.svg')",
    backgroundSize: '130px',
  },
  paper5: {
    height: 130,
    width: 130,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    background: "url('./assets/Dice-5.svg')",
    backgroundSize: '130px',
  },
  paper6: {
    height: 130,
    width: 130,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    background: "url('./assets/Dice-6.svg')",
    backgroundSize: '130px',
  },
  eyes: {
    fontSize: '3rem',

  }
}

class Dice extends Component {

  render() {
    const { eyes } = this.props
    var numberStyle
    if (eyes == 1) {
       numberStyle = style.paper1
    } else if (eyes == 2){
      numberStyle = style.paper2
    } else if (eyes == 3){
      numberStyle = style.paper3
    } else if (eyes == 4){
      numberStyle = style.paper4
    } else if (eyes == 5){
      numberStyle = style.paper5
    } else if (eyes == 6){
      numberStyle = style.paper6
    }
    console.log(numberStyle);
    return (
      <GridTile>
        <Paper style={ numberStyle } zDepth={1}>
          <h1 style={ style.eyes }></h1>
        </Paper>
      </GridTile>
    )
  }
}

Dice.propTypes = {
  index: PropTypes.number.isRequired,
  eyes: PropTypes.number.isRequired,
}

export default Dice
