import React from 'react';
import Header from './components/Header'
import routes from './routes'
import {connect} from 'react-redux'
import {checkUser} from './redux/userReducer'
import './App.css';
import {Redirect} from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.checkUser()
  }

  render() {
    // if(this.props.userReducer.user.user_email) return <Redirect to="/shop" />
    let loading = this.props.userReducer.loading ? "busy-cursor" : null;
    return (
      <div className={`App ${loading}`}>
        <Header />
        {routes}
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  }
}

export default connect(mapStateToProps, {checkUser})(App);
