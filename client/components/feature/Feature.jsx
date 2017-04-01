import React, { Component } from 'react';
import Timer from './Timer.jsx';
import Progress from './Progress.jsx';
import InfoBtn from './InfoBtn.jsx';

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: this.props.deadline
    }
    setInterval(() => {
      console.log("IS THIS THING ON?");
      this.setState({ duration: this.state.duration - 1 });
    }, 1000);
  }

  render() {
    console.log(this.props.title);
    return (
    <div className="feature-container">
       <h1 className="feature-header">{this.props.title}</h1>
       <div className="tracker-container">
         <Timer index={this.props.index} duration={this.state.duration} timeUpdate={this.props.timeUpdate}/>
         <Progress />
         <InfoBtn />
       </div>
    </div>
   );
  }
}

export default Feature;
