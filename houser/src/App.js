import React, { Component } from 'react';
import Header from './components/Header/Header';
import route from './route';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {route}
      </div>
    );
  }
}

export default App;
