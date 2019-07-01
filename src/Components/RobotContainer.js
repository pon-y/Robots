import React from 'react';

function RobotContainer ( props ) {
    return (
      <div className="RobotContainer">
        <img alt="robots!" src={`${props.robot}`} />
      </div>
    )
}

export default RobotContainer;