import React, { Component } from 'react';

class FeatureInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      deadline: ''
    };

    this.handleChange = this.handleTitleChange.bind(this);
    this.handleChange = this.handleDeadlineChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
  }

  handleDeadlineChange(event) {
    event.preventDefault();
    this.setState({ deadline: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addFeature(this.state.title, this.state.deadline);
    
    this.setState({
      title: '',
      deadline: ''
    })
  }

  render() {



    return (
      <form className="feature-form" onSubmit={this.handleSubmit}>
        <div className="title-container">
          <input type="text" id='tit' className="feature-title" placeholder="Project Name" value={this.state.title} onChange={(a) => this.handleTitleChange(a)} />
        </div>
        <div className="deadline-container">
          <input type="text" id='dine' className="deadline" placeholder="Duration" value={this.state.deadline} onChange={(a) => this.handleDeadlineChange(a)} />
        </div>
          <button type='submit' id="add-feature">Add Project</button>
      </form>
    );
  }
}

export default FeatureInfo;
