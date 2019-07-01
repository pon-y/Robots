import React, { Component } from 'react';
import './App.css';

import Form from './Components/Form';
import RobotContainer from './Components/RobotContainer';

class App extends Component {
  state = {
    input: 'happy',
    imgSet: 'kittens',
    robot: null
  }

 handleInputChange = (e) => {
  this.setState({ input: e.target.value })
 }

 handleSubmit = (e) => {
   this.getRobot(this.state.input, this.state.imgSet);
   e.preventDefault();
 }

 getRobot = (userInput, imageSet) => {

  let imageSetOptions = {
    robots : '',
    monsters : `/?set=set2`,
    robotHeads : '?set=set3',
    kittens: `?set=set4`
  };

  let url = `https://robohash.org/`.concat(userInput, imageSetOptions[imageSet]);

  fetch(url)
  .then(response => {
    if(response.status === 200) {
      return response.blob();
    } else {
        return Promise.reject(response.status);
    }
   })
  .then(imgBlob => {
    let imgURL = URL.createObjectURL(imgBlob)
    this.setState({robot: imgURL});
  });
 };



  render () {

  return (
    <div className="App">
      <h1 className="name"> Yvonne Pon </h1>
      <Form
        input={this.state.input} 
        handleInputChange={this.handleInputChange} 
        handleSubmit={this.handleSubmit}
      />
      {/* Options for custom image types here*/}
      <RobotContainer robot={this.state.robot}/> 
    </div>
  );
  }
}

export default App;
