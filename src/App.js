import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from 'redux';
import store from './store';

class App extends Component {
  
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
