import React from 'react';
import './Home.css';
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className = 'home-div'> 
       <img className ='logo' src= "../../images/logo3.png" alt="logo"/>
       <div className= 'strap-line'>
       <h1 >LANGUAGE EXCHANGE MADE EASY</h1>

       <div className = "buttons"  >
       <Button className = "signup-button" href = '/signup' size="lg" block>
        SIGNUP 
      </Button>
      
      <Button className = "login-button" href = '/login' variant="primary" size="lg" block>
       LOGIN  
      </Button>
      
      </div>
     
      </div>
    </div>
  )
}

export default Home;