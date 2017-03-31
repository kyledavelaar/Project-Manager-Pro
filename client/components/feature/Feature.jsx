import React, { Component } from 'react';
import Timer from './Timer.jsx';
import Progress from './Progress.jsx';
import InfoBtn from './InfoBtn.jsx';
import CheckpointCntr from '../checkpoint/CheckpointCntr.jsx';

class Feature extends Component {
  render() {
    return (
    <div className="feature-container">
       <h1 className="feature-header">{this.props.title}</h1>
       <div className="tracker-container">
         <Timer />
         <Progress />
         <InfoBtn />
       </div>
    </div>
   );
  }
}

export default Feature;
