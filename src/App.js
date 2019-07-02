import React, { Component } from 'react';
import './App.css';

import Form from './Components/Form';
import RobotContainer from './Components/RobotContainer';

class App extends Component {
  state = {
    input: '',
    imgSet: '',
    robot: ''
  }

 handleInputChange = (e) => {
  this.setState({ input: e.target.value })
 }

 handleSelectChange = (e) => {
   console.log(e.value);
  this.setState({ imgSet: e.target.value });
 }

 handleSubmit = (e) => {
   this.getRobot(this.state.input, this.state.imgSet);
   e.preventDefault();
 }

 getRobot = (userInput, imageSet) => {
  this.setState({ robot: 'loading' });
  let url = `https://robohash.org/`.concat(userInput, imageSet);

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
    console.log(imgBlob);
    this.setState({ robot: imgURL });
  });
 };



  render () {

  return (
    <div className="App">
      <h1 className="name"> Yvonne Pon </h1>
      <Form
        input={ this.state.input } 
        imgSet={ this.state.imgSet }
        handleInputChange={ this.handleInputChange } 
        handleSelectChange={ this.handleSelectChange }
        handleSubmit={ this.handleSubmit }
      />
      <RobotContainer robot={ this.state.robot }/> 
      <div className="credit">Robots lovingly delivered by Robohash.org</div>
    </div>
  );
  }
}

export default App;
