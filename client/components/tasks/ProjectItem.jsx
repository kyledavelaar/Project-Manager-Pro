import React, { Component } from 'react';

export default class ProjectItem extends Component {
  
  deleteProject(id) {
    this.props.onDelete(id); 
  }

  render() {
    return (
      <li style={{}}>
        <strong>{this.props.project.title}</strong> : {this.props.project.category} <button onClick={this.deleteProject.bind(this, this.props.project.id)} className="btn btn-danger btn-sm" style={{padding: 0}}>Delete</button>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func 
};