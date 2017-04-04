import React, { Component } from 'react';
import ProjectItem from './ProjectItem.jsx'; 

export default class Projects extends Component {

  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map((project, i) => 
        <ProjectItem onDelete={this.deleteProject.bind(this)} key={i} project={project} />
      );
    }

    return (
      <div>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}
