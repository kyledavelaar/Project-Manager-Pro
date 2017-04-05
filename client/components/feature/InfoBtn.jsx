import React, { Component } from 'react';
import Tasks from './../tasks/Tasks.jsx';
import AddTask from './../tasks/AddTask.jsx';
// import Task from './Task.jsx';

class InfoBtn extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }
  
  handleAddProject(project) {
      let projects = this.state.projects; 
      projects.push(project);
      this.setState({projects: projects})
    }
    
    handleDeleteProject(id) {
      let projects = this.state.projects;
      let index = projects.findIndex((x) => x.id === id); 
      projects.splice(index, 1); 
      this.setState({projects:projects})
    }

  render() {
    return (
     <div className="info-btn">

      {/*Button trigger modal*/}
      <button type="button" className="update-btn" data-toggle="modal" data-target="#myModal">
        Add Tasks
      </button>

      {/*Modal*/}
      <div className="modal fade " id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
             {/* ADD TITLE HERE*/}
              <h1 className="modal-title" id="myModalLabel">{this.props.title}</h1>
            </div>
            <div className="modal-body">
              <AddTask addProject={this.handleAddProject.bind(this)}/>
              <Tasks onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} /> 
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              {/*=========ADD TASK TO THE SERVER==================*/}
              <button type="button" data-dismiss="modal" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
     </div>
   );
  }
}

export default InfoBtn;
