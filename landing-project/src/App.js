
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
      </div>
    );
  }
}

export default App;
