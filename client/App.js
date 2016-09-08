import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import signOut from './actions/sign-out-user'

// Components/containers
import Game from './containers/Game'
import StartGame from './components/StartGame'

import SignInOrUp from './containers/SignInOrUp'
import Loader from './components/Loader'

// Material UI Components
import FlatButton from 'material-ui/FlatButton'

var divStyle = {
    backgroundImage: "url('./assets/retro-background.svg')",
    backgroundSize: "100%",
};

class App extends Component {
  signOut() {
    this.props.signOut()
  }


  renderGame() {
    const { gameStarted, dice } = this.props
    
    if (!gameStarted) return <StartGame  />
    return (
      <div>
        <Game  />
      </div>
    )
  }


  render() {

    const { loading, authenticated, currentUser } = this.props;

    return (
      <div style={divStyle}>
        { loading ? <Loader/> : null }
        { authenticated ?
          (<div>
            <h1>Hi, { currentUser.name }!</h1>
            <div >
              { this.renderGame() }
            </div>
           <p>
              <FlatButton
                onClick={ this.signOut.bind(this) }
                label="Sign out"/>
            </p>
          </div>) :
            <SignInOrUp /> }
      </div>
    )
  }



}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    authenticated: state.authenticated,
    currentUser: state.currentUser,
    gameStarted: (state.dice.length > 0),
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, { signOut })(App);
