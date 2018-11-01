import React, { Component } from 'react';
// import logo from './logo.svg';
import Login from './Login';
import MainContainer from './MainContainer';
// import PokeList from './PokeList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: [],
      number: []
    }
  }
  handleLogin = (username, isLoggedIn) => {
      console.log(username, isLoggedIn);

      this.setState({
        username: username,
        logged: isLoggedIn
      })
  }
  render() {
    return (
      <div className="App">
        <h1>PokeList React App</h1>
        { this.state.logged ? <MainContainer username={ this.state.username }/> : <Login handleLogin={ this.handleLogin } />}
      </div>
    );
  }
}

export default App;
