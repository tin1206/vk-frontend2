import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import MainContainer from './containers/mainContainer'
import { connect } from 'react-redux';
import {unauth_routes} from './routes'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {token: this.props.auth.isAutheticated}
  }
  render(){
    return (
        <Router>
        {this.props.auth.isAutheticated ? 
        <MainContainer /> :
         unauth_routes()
        }
        </Router>
    );
  }
}
const mapStateToProps = () => (state) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(App);
