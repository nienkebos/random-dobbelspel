import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import createGame from '../actions/create-game'

// Components
import Dice from '../components/Dice'

// Material UI Components
import { GridList } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 612,
    height: 612,
    overflowY: 'auto',
    marginBottom: 0,
  },
};

class Game extends Component {
  componentDidMount() {
    this.props.createGame()
  }

  renderDice(dice, index) {
    return (
      <Dice key={ index }
        index={ index } { ...dice } />
    )
  }

  render() {
    const { dice } = this.props

    return (
      <div style={ styles.root }>
        <GridList cellHeight={ 150 } cols={ 3 } style={ styles.gridList }>
          { dice.map(this.renderDice.bind(this)) }
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dice: state.dice,
  }
}

Game.propTypes = {
  dice: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, { createGame })(Game)
