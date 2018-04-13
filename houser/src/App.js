import React, { Component } from 'react';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import House from './components/House/House';
import Wizard from './components/Wizard/Wizard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <House />
        <Wizard />
      </div>
    );
  }
}

export default App;
