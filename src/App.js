import React from 'react';
import './App.css';
import Composition from './components/Composition';
// import LiftingStateUp from './components/LiftingStateUp';
// import ControlledComponent from './components/ControlledComponent';


class App extends React.Component {
  constructor(props) {
    console.log("APP CONSTRUCTOR");
    super(props);
  }


  render() {
    console.log("APP RENDER");
    return (
      <Composition value="hello">
        <h1>
          I am children of Composition Component
        </h1>
      </Composition>
    )
  }
}

export default App;
