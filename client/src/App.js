import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar.js'

class App extends Component {
  render() {
    return (
    <div className="App">
      <AppNavbar />
    </div>
    );
  }
}

export default App;