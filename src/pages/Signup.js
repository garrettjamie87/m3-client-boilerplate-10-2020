import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../context/auth-context';
import "./signup.css";
import Button from "react-bootstrap/Button";



class Signup extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    
    this.props.signup( username, password );
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className ='sign-up-page'>
        <h1 className ='title'>SIGN UP</h1>

        <form className = 'sign-up' onSubmit={this.handleFormSubmit}>

          <label>Username</label><br/>
          <input type="text" name="username" value={username} onChange={this.handleChange} /><br/>

          <label>Password</label><br/>
          <input type="password" name="password" value={password} onChange={this.handleChange} /><br/>

           <Button className= 'signup-button' type="submit" value="Signup">
           SIGNUP &#x2192;
           </Button>
        </form>
        
        <p>Already have account?</p>
        <Link className ='login' to={"/login"}> Login</Link>
      </div>
    );
  }
}



export default withAuth(Signup);


// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;