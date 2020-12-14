import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
// import axios from "axios";

class MessageBoard extends Component {
      // constructor(props){
      //       super(props)
      //       this.state = {
      //         convo: []
      //       } 
      // }

      // handleMessageSubmit = event => {
      //       event.preventDefault();
      //       const { convo } = this.state;
      //       axios
      //         .post(
      //           "http://localhost:5000/api/message/:id",
      //           { convo },
      //           { withCredentials: true }
      //         )
      //         .then(() => this.props.history.push("/messageboard"))
        
      //         .catch(err => console.log(err));
      //     };
        

      // getMyMessages = () =>{
      //       axios.get('http://localhost:5000/api/messages', {withCredentials: true})
      //       .then((messages) => {
      //             this.setState({
      //                   convo:messages.data
      //             })
      //       })




      render() {
            return (
                  <div>
                     <h1>Message Board</h1>
                     <section class="message-board">
                     <div class="title">
                     <h2>
                     Leave a message
                    </h2>
                  </div>
        <textarea class="message" type="text"></textarea><br/>
        <input value="submit" type="button" class="submit-btn"/>
        <div class="display-area">
            Existing comment:
        </div>
    </section>
                  </div>
            )
      }
}










export default withAuth(MessageBoard);

