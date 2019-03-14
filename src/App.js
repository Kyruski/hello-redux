import React, { Component } from "react";
import ReactDOM from 'react-dom';
import HelloWorld from "./HelloWorld";
import {store} from './store';
import ButtonGroup from './ButtonGroup';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

store.subscribe(render)

class App extends Component {
  
  render() {
    return [
    <HelloWorld key={1} tech={store.getState().tech} />,
    <ButtonGroup key={2} technologies={["React", "Elm", "Redux"]} />
  ];
  }
}

export default App;
