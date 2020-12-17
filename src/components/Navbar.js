import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../context/auth-context';
import Button from "react-bootstrap/Button";
import "./navbar.css";
import Nav from "react-bootstrap/Nav";



class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <Nav className="navbar">
      <Nav.Item>
        <Link to={'/mybuddies'} id='home-btn'>
          <u>MATCHES</u>
        </Link>
        </Nav.Item>
        {this.props.isLoggedIn ? (
          <>

          <Nav.Item>
            <Link  to = {`/mybuddieslist/${this.props.user._id}`}><u>BUDDIES</u></Link>
            </Nav.Item>
          <Nav.Item>
          
            <Link to = '/myconvos'>
            <u>CHATS</u>
            </Link>
            </Nav.Item>

            


            <Nav.Item>
            <Button className = 'butt' onClick={this.props.logout}>LOGOUT</Button>
            </Nav.Item>

           
           
          </>
        ) : (

          <>
          <Nav.Item>

            <Link to="/login">
              <button className="navbar-button">Login</button>{' '}
            </Link>
            </Nav.Item>

            <Nav.Item>
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{' '}
            </Link>
            </Nav.Item>
            </>
        )}
      </Nav>
    );
  }
}

export default withAuth(Navbar);