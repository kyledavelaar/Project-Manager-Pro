import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class Timer extends Component {
  render() {

    let percent = this.props.elapsed/this.props.duration;

    return (
     <div className="time-container">
       <CircularProgressbar  className="time-circle" strokeWidth={5} percentage={Math.floor(percent * 100)} />
     </div>
   );
  }
}

export default Timer;
