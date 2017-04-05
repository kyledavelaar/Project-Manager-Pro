import React, { Component } from 'react';

export default class TaskItem extends Component {
  
  deleteProject(id) {
    this.props.onDelete(id); 
  }

  render() {
    return (
      <h3>
        <strong>
          {this.props.project.title}
        </strong> 
        
        : {this.props.project.category} 
        
        <button 
          onClick={this.deleteProject.bind(this, this.props.project.id)} className="btn btn-danger btn-md" 
          style={{padding: 5, marginLeft: 10}}>
          Delete
        </button>
      </h3>
    );
  }
}

TaskItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func 
};