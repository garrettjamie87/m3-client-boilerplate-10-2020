
import React, { Component } from "react";
import { withAuth } from '../context/auth-context';

class MessageBoard extends Component {
      render() {
            return (
                  <div>
                     <h1>Message Board</h1>   
                  </div>
            )
      }
}










export default withAuth(MessageBoard);
