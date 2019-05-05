import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from "./Componenets/Store/Store"
import MainInfo from "./Componenets/MainInfo"
import CaloriesInfo from "./Componenets/CaloriesInfo"
import {Route} from "react-router-dom"
import Meals from './Componenets/Meals'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Route exact path="/" component={MainInfo} />
          <Route path="/calories" component={CaloriesInfo} />
          <Route path="/meals" component={Meals} />
      </Provider>
    );
  }
}
// https://www.pexels.com/@goumbik - autor zdjęcia
export default App;
