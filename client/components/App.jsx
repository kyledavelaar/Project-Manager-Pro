import React, { Component } from 'react';
import Project from './Project.jsx';
import Login from './Login.jsx';
import axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
      features: [],
    };
    
  }

  changeView() {
    this.setState({
      view: 'project',
    })
  }

  loadFeatures(features) {
    this.setState({
      features: features
    })
  }

  render() {
    console.log('APP STATE FEATURES', this.state.features);
    if (this.state.view === 'login') {
      return (
        <Login 
          view={this.changeView.bind(this)}
          loadFeatures={this.loadFeatures.bind(this)}
        />
      ) 
    } 
    if (this.state.view === 'project')
      return (
        <div id="app-container" style={{ textAlign: 'center' }}>
          <Project storedFeatures={this.state.features}/>
        </div>
      );
  }
}

