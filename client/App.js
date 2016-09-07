import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import signOut from './actions/sign-out-user'

// Components/containers
import Game from './containers/Game'
import SignInOrUp from './containers/SignInOrUp'
import Loader from './components/Loader'

// Material UI Components
import FlatButton from 'material-ui/FlatButton'



class App extends Component {
  signOut() {
    this.props.signOut()
  }

  renderSignIn() {

    const { loading, authenticated, currentUser } = this.props;

    return (
      <div>
        { loading ? <Loader/> : null }
        { authenticated ?
          (<div>
            <h1>Hi, { currentUser.name }!</h1>
           <p>
              <FlatButton
                onClick={ this.signOut.bind(this) }
                label="Sign out"/>
            </p>
          </div>) :
            <SignInOrUp/> }
      </div>
    )
  }

  renderBoard() {
    return (
      <div>
        <h2>Game board</h2>
		<Game />

      </div>
    )
  }

  render() {
    let signIn = true;

    if (signIn == true) {
      return(
        <div>
          <h2>Sign in</h2>
          { this.renderSignIn()}
        </div>
      );
    } else {
      return(
        <div>
          <h2>Sign out</h2>
          { this.renderBoard()}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    authenticated: state.authenticated,
    currentUser: state.currentUser,
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, { signOut })(App);
