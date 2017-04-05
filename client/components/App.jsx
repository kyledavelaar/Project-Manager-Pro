import React, { Component } from 'react';
import Project from './Project.jsx';
import Login from './Login.jsx';
import axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login' 
    };
    
  }

  changeView() {
    this.setState({view: 'project'})
  }

  render() {

    if (this.state.view === 'login') {
      return (
        <Login view={this.changeView.bind(this)} />
      ) 
    } 
    if (this.state.view === 'project')
      return (
        <div id="app-container" style={{ textAlign: 'center' }}>
          <Project />
        </div>
      );
  }
}

