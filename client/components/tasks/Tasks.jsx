import React, { Component } from 'react';
import TaskItem from './TaskItem.jsx'; 

export default class Tasks extends Component {

  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let taskItems;
    if(this.props.projects){
      taskItems = this.props.projects.map((project, i) => 
        <TaskItem onDelete={this.deleteProject.bind(this)} key={i} project={project} />
      );
    }

    return (
      <div className="task-container">
        {taskItems}
      </div>
    );
  }
}

Tasks.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}
