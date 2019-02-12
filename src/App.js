import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';
import route from './route'


class App extends Component {
  render() {
    return (
      <HashRouter> 
        <div className="App">
          {route}
        </div>
      </HashRouter>
    );
  }
}

export default App;
