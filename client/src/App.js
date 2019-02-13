import React, { Component } from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
// import AdvertisementsContainer from './components/Advertisements/AdvertisementContainer'

// do I need this when I use database routing? I think yes?
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />

        {/* //Routes goes here */}
        {/* <AdvertisementsContainer /> */}

      </Provider>


    );
  }
}

export default App;
