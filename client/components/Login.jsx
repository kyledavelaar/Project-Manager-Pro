import React, { Component } from 'react';
import axios from 'axios';


export default class Login extends Component {
  constructor(props) {
    super(props);
  }


  handleLogin(e) {
    e.preventDefault();
    //console.log(this.refs.username.value, this.refs.password.value);
    
    //send validation request to server
    //if successful login; change state in App Component to Project 
    axios.post('./verifyUser', {
      username: this.refs.username.value, 
      password: this.refs.password.value
    }).then((response) => {
      if (response === true) {
        this.props.view()
      }
    })

  }
  
  handleCreateUser(e) {
    e.preventDefault();
    //console.log(this.refs.username.value, this.refs.password.value);
    
    //once user is created, redirect them to project page 
    axios.post('./createUser', {
        username: this.refs.username.value, 
        password: this.refs.password.value
      }).then((response) => {
        this.props.view()    
      })
  }

  
  render() {

    return (
      <div id="app-container" style={{ textAlign: 'center' }}>
        <h1 style={{color: 'white'}}>Project Manager Pro</h1>
        <div>
          <h3>Login</h3>
          <form id="chat-form" onSubmit={this.handleLogin.bind(this)}>
            <input className="login" placeholder="Username" type="text" ref="username" />
            <input className="login" placeholder="Password" type="password" ref="password" />
            <input className="login-button" type="submit" className="hidden" />
          </form>
        </div>

        <div>
          <h3>Create Account</h3>
          <form id="chat-form" onSubmit={this.handleCreateUser.bind(this)}>
            <input className="login" placeholder="Username" type="text" ref="username" />
            <input className="login" placeholder="Password" type="password" ref="password" />
            <input className="login-button" type="submit" className="hidden" />
          </form>
        </div>
      </div>
    );
  }
}

