
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import { Route, Switch } from "react-router-dom"
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
        <Route path="/products" component={Products} />  
        <Route path="/" component={Landing} />  
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
