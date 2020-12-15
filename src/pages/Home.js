import React from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import logo from "../images/big-mouth-logo.png";

function Home() {
  return (
    <div className="home">
      <img className="logo" src={logo} alt="Barcelona Bigmouths" />
      <h1>Language Exchange made easy</h1>

      <div className="buttons">
        <Button
          className="login-button"
          href="/login"
          variant="primary"
          size="lg"
          block
        >
          LOG IN &#x2192;
        </Button>
        <Button className="signup-button" href="/signup" size="lg" block>
          SIGN UP &#x2192;
        </Button>
      </div>
    </div>
  );
}

export default Home;
