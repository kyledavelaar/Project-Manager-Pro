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
  }

  render() {
    return (
      <form className="feature-form" onSubmit={this.handleSubmit}>
        <div className="title-container">
          <label htmlFor="feature-title">ProjectName:</label>
          <input className="feature-title" type="text" value={this.state.title} onChange={(a) => this.handleTitleChange(a)} />
        </div>

        <div className="deadline-container">
          <label htmlFor="deadline">Deadline:</label>
          <input className="deadline" type="text" value={this.state.deadline} onChange={(a) => this.handleDeadlineChange(a)} />
        </div>
        
          <button id="add-feature" type='submit'>Add Project</button>
      </form>
    );
  }
}

export default FeatureInfo;
