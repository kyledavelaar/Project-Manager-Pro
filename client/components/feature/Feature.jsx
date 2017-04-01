import React, { Component } from 'react';
import Timer from './Timer.jsx';
import Progress from './Progress.jsx';
import InfoBtn from './InfoBtn.jsx';



class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed: this.props.elapsed
    }

    // Each Feature will have its own pseudo state to update its timer
    let interval = setInterval(() => {
      this.setState({ elapsed: this.state.elapsed + 1 });
      if (this.state.elapsed === this.props.deadline) {
        clearInterval(interval);
      }
    }, 1000);
  }

  render() {

    console.log(this.props.title);
    return (
      <div className="feature-container">
        <h1 className="feature-header">{this.props.title}</h1>
        <div className="tracker-container">
          <Timer index={this.props.index} duration={this.props.deadline} elapsed={this.state.elapsed} />
          <Progress />
          <InfoBtn />
        </div>
      </div>
    );
  }
}

export default Feature;
