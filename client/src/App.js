import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import Advertisements from './components/Advertisements'

// do I need this when I use database routing? I think yes?
// import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {/* //Routes goes here */}
      <Advertisements />

      </Provider>
      
     
    );
  }
}

export default App;
