import React, { Component } from 'react';
import './App.css';

import Form from './Components/Form';
import RobotContainer from './Components/RobotContainer';

class App extends Component {
  state = {
    input: '',
    imgSet: null,
  }

 handleInputChange = (e) => {
  this.setState({ input: e.target.value })
 }

 handleSubmit = (e) => {

 }
  render () {

  return (
    <div className="App">
      <h1 className="name"> Yvonne Pon </h1>
      <Form
        input={this.state.input} 
        handleInputChange={this.handleInputChange} 
        handleSubmit={this.handleSubmit}
      />
      {/* Options for custom image types */}
      <RobotContainer /> 
    </div>
  );
  }
}

export default App;
