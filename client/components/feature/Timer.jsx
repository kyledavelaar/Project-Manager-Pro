import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';



class Timer extends Component {

  render() {

    this.props.timeUpdate(this.props.index, this.props.duration)

    return (
     <div className="time-container">
       <CircularProgressbar  className="time-circle" strokeWidth={5} percentage={this.props.duration} />
     </div>
   );
  }
}

export default Timer;
