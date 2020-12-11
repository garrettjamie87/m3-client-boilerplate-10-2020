import React, { Component } from "react";
import { withAuth } from '../context/auth-context';

class EditProfile extends Component {
      render() {
            return (
                  <div>
                     <h1>Buddy detail</h1>   
                  </div>
            )
      }
}










export default withAuth(EditProfile);
