import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import route from './route';
import './App.css';
import wizardRoutes from './components/Wizard/wizardRoutes';

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
