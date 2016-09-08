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
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

class Game extends Component {
  componentDidMount() {
    this.props.createGame()
  }

  // secondRoll() {
  //   const { player } = this.props
  //
  //   function turn(eyes) {
  //     newTurn = eyes.map(function(nr){
  //       if (nr == 1 || nr == 5) {
  //       return nr
  //       } else {
  //       return Math.floor((Math.random()*6)+1)
  //       }
  //     });
  //     return newTurn
  //   }
  //
  //   function count(turn,num) {
  //     var count = 0;
  //     for(var i = 0; i < turn.length; ++i){
  //         if(turn[i] == num)
  //             count++;
  //     }
  //     return count;
  //   }
  //
  //   function checkDead(old,nw) {
  //     if (count(old,5) == count(nw,5) && count(old,1) == count(nw,1)) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  //
  // }

  rollAgain() {
    const { player } = this.props
    this.props.secondRoll(player)
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
            <Scoreboard />
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
    player: state.player,
  }
}

Game.propTypes = {
  dice: PropTypes.array.isRequired,
  createGame: PropTypes.func.isRequired,
  secondRoll: PropTypes.func.isRequired,

}

export default connect(mapStateToProps, { createGame, secondRoll })(Game)
