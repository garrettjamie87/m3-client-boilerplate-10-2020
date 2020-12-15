import React, { Component } from "react";
import { withAuth } from './../context/auth-context';
import "./login.css";
import Button from "react-bootstrap/Button";


class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    // Call function coming from AuthProvider ( via withAuth )
    this.props.login(username, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className = 'login-page'>
        <h1 className='title'>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          
          <label className = 'labels'>Username</label><br/>
          <input type="text" name="username" value={username} onChange={this.handleChange}/><br/>

          <label className = 'labels'>Password</label><br/>
          <input type="password" name="password" value={password} onChange={this.handleChange} /><br/>

          <Button className = 'login-buttonZ' type="submit" value="Login" >Login &#x2192;</Button>
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
