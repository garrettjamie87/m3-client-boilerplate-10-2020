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
        <Link to={'/mybuddies'} id='home-btn'>
          <h4>Buddies</h4>
        </Link>
        {this.props.isLoggedIn ? (
          <>
            <Link to = '/myconvos'>
            <Button className = 'butt'>MyConvos</Button>
            </Link>
            <Button className = 'butt' onClick={this.props.logout}>Logout</Button>
         
           
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