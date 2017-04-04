import React, { Component } from 'react';
import axios from 'axios';



export default class Login extends Component {
  constructor(props) {
    super(props);
  }


  handleLogin(e) {
    e.preventDefault();
    console.log(this.refs.username.value, this.refs.password.value);
  }
  
  handleCreateUser(e) {
    e.preventDefault();
    console.log(this.refs.username.value, this.refs.password.value);
  }

  
  render() {

    return (
      <div id="app-container" style={{ textAlign: 'center' }}>
        <h1 style={{color: 'white'}}>Project Manager Pro</h1>
        <div>
          <h3>Login</h3>
          <form id="chat-form" onSubmit={this.handleLogin.bind(this)}>
            <input placeholder="Username" type="text" ref="username" />
            <input placeholder="Password" type="password" ref="password" />
            <input type="submit" className="hidden" />
          </form>
        </div>
        <div>
          <h3>Don't Have an Account?</h3>
          <form id="chat-form" onSubmit={this.handleCreateUser.bind(this)}>
            <input placeholder="Username" type="text" ref="username" />
            <input placeholder="Password" type="password" ref="password" />
            <input type="submit" className="hidden" />
          </form>
        </div>
      </div>
    );
  }
}

