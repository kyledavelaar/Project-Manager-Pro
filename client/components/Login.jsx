import React, { Component } from 'react';
import axios from 'axios';


export default class Login extends Component {
  constructor(props) {
    super(props);
  }


  handleLogin(e) {
    e.preventDefault();
 
    this.props.view()
    //send validation request to server
    //if successful login; change state in App Component to Project 
    // axios.post('./verifyUser', {
    //   username: this.refs.username.value, 
    //   password: this.refs.password.value
    // }).then((response) => {
    //   if (response === true) {
    //     this.props.view()
    //   }
    // })
  }
  
  handleCreateUser(e) {
    e.preventDefault();
    console.log('CREATE USER', this.refs.username.value, this.refs.password.value);
    //once user is created, redirect them to project page 
    
    axios.post('./createUser', {
      username: this.refs.username.value, 
      password: this.refs.password.value
    }).then((response) => {
      console.log('CREATE USER REDIRECT')
      this.props.view()    
    }).catch((err) => console.log('*******CREATE USER ERROR*****', err))
  }

  
  render() {

    return (
      <div id="app-container" style={{ textAlign: 'center' }}>
        <h1 style={{color: 'white'}}>Project Manager Pro</h1>
        <div className="title-container">
          <form 
            className="feature-form" 
            id="chat-form" onSubmit={this.handleLogin.bind(this)}
          >
            <h3 className="create-account">Login</h3>
            <input className="deadline" placeholder="Username" type="text" ref="username" />
            <input className="deadline" placeholder="Password" type="password" ref="password" />
            <input type="submit" className="hidden" />
          </form>
        </div>

        <div className="title-container">
          <form 
            className="feature-form" 
            onSubmit={this.handleCreateUser.bind(this)}
          >
            <h3 className="create-account">Create Account</h3>
            <input className="deadline" placeholder="Username" type="text" ref="username" />
            <input className="deadline" placeholder="Password" type="password" ref="password" />
            <input type="submit" className="hidden" />
          </form>
        </div>
      </div>
    );
  }
}

