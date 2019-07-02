import React from 'react';

var Spinner = require('react-spinkit');

function RobotContainer ( props ) {
  const {robot} = props;

  let image = `Please enter text or select an image set`
  if(robot === 'loading') {
    image = <Spinner className="loader" name="ball-scale-multiple" color="coral" fadeIn="none" />
  }
  else if(robot !== '' ) {
    image = <img className="fadeIn" alt="robots!" src={ `${robot}` } />
  } 
    return (
      <div className="RobotContainer">
        {image}
      </div>
    )
}

export default RobotContainer;