import React, {Component} from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import MainContainer from './containers/mainContainer'
import Signin from './components/authentication/signin'


class App extends Component {
  constructor(){
    super()
    this.state = {token: localStorage.getItem('token')}
  }
  render(){
    return (
      <Router>
        {this.state.token ? 
        <MainContainer /> :
          <Signin />
        }
        
      </Router>

    );
  }
}

export default App;
