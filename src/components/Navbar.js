import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../context/auth-context';
import Button from "react-bootstrap/Button";
import "./navbar.css";

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to={'/'} id='home-btn'>
          <h4>CASA</h4>
        </Link>
        {this.props.isLoggedIn ? (
          <>
            {/* <p>username: {this.props.user && this.props.user.username}</p> */}
            <Button className = 'butt' onClick={this.props.logout}>Logout</Button>
         
            {/* <p>username: {this.props.user && this.props.user.username}</p> */}
            <Link to = '/myconvos'>
            <Button className = 'butt'>MyConvos</Button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-button">Login</button>{' '}
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{' '}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);