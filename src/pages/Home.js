import React from 'react';
import './Home.css';
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className = 'home-div'> 
       <img className ='Logo' src= "../../images/logo2.png" alt="logo" width="330" height="205"/>
       <div className= 'strap-line'>
       <h3 >LANGUAGE EXCHANGE MADE EASY</h3>

       <div className = "buttons">
       <Button href = '/signup' variant="primary" size="lg" block>
        SIGNUP 
      </Button>
      
      <Button href = '/login' variant="primary" size="lg" block>
       LOGIN  
      </Button>
      
      </div>
     
      </div>
    </div>
  )
}

export default Home;