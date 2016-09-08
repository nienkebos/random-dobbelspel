import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import createGame from '../actions/create-game'

// Components
import Dice from '../components/Dice'

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
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

class Game extends Component {
  componentDidMount() {
    this.props.createGame()
  }

  rollAgain(){
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
      <div>
        <div style={ styles.root }>
          <GridList cellHeight={ 150 } cols={ 3 } style={ styles.gridList }>
            { dice.map(this.renderDice.bind(this)) }
          </GridList>
          </div>

          <div>
            <RaisedButton
              style={ buttonStyle }
              onClick={ this.rollAgain.bind(this) }
              label={ 'Dobbelen!' }
              primary={true} />
          </div>
          <div>
            <RaisedButton
              style={ buttonStyle }
              // onClick={ this.createGame }
              label={ 'Ik durf niet meer...' }
              primary={true} />
              {/* Nieuwe functie voor schrijven */}
          </div>
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
  createGame: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { createGame })(Game)
