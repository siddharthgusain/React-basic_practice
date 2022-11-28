import React from 'react';
import './App.css';
import ControlledComponent from './components/ControlledComponent';

class App extends React.Component {
  constructor(props) {
    console.log("APP CONSTRUCTOR");
    super(props);
  }


  render() {
    console.log("APP RENDER");
    return (
      <ControlledComponent />
    )
  }
}

export default App;
