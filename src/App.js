import React, { Component } from 'react';
import api from './services/api';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component() {
  render() {
    return <Searchbar />;
  }
}

export default App;
