import React, { Component } from "react";
import { withAuth } from '../context/auth-context';

 class MyBuddies extends Component {
      render() {
            return (
                  <div>
                     <h1>Some bullshit here</h1>   
                  </div>
            )
      }
}










export default withAuth(MyBuddies);
