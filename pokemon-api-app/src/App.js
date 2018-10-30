import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: [],
      number: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1>PokeList</h1>
        <Login />
      </div>
    );
  }
}

export default App;
