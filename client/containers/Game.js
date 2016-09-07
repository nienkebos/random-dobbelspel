import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Material UI Components
import { GridList } from 'material-ui/GridList';


class Game extends Component {
  renderDice(dice, index) {
    return (
      <Dice key={ index }
        index={ index } { ...dice } />
    )
  }


  render() {
    return (
      <div style={ styles.root }>
        <GridList cellHeight={ 150 } cols={ 3 } style={ styles.gridList }>
          { dice.map(this.renderDice.bind(this)) }
        </GridList>
      </div>
    )
  }
}

export default Game
