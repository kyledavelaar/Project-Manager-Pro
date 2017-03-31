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
    this.setState({ title: event.target.value });
  }

  handleDeadlineChange(event) {
    this.setState({ deadline: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="feature-form" onSubmit={this.handleSubmit}>
        <div className="title-container">
          <label for="feature-title">Project Name:</label>
          <input className="feature-title" type="text" value={this.state.title} onChange={this.handleTitleChange} />
        </div>
        <div className="deadline-container">
          <label for="deadline">Deadline:</label>
          <input className="deadline" type="date" value={this.state.deadline} onChange={this.handleDeadlineChange} />
        </div>
      </form>
    );
  }
}

export default FeatureInfo;
