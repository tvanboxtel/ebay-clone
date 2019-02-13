import React, { Component } from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Advertisements from './components/Advertisements/AdvertisementContainer'
import DetailPage from './components/DetailPage/DetailPageContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Advertisements}/>
          <Route path="/advertisements/:id" component={DetailPage} />
        </div>
      </Provider>
    );
  }
}

export default App;
