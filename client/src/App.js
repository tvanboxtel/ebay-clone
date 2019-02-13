import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'

// do I need this when I use database routing? I think yes?
// import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {/* //Routes goes here */}
       <div className="App">
        <header className="App-header">
          Welcome to FreeBay, an open source alternative to eBay!
        </header>
      </div>
      </Provider>
      
     
    );
  }
}

export default App;
