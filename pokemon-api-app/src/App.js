import React, { Component } from 'react';
import logo from './logo.svg';
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
      </div>
    );
  }
}

export default App;
