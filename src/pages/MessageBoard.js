import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
import axios from "axios";

class MessageBoard extends Component {
      constructor(props){
            super(props)
            this.state = {
              convo: []
            } 
      }

      handleMessageSubmit = event => {
            const conversationID = this.props.match.params.id
            event.preventDefault();
            const { convo } = this.state;
            let receiverId = " "
            if (convo.userOne == this.props.user._id){
                  receiverId = convo.userTwo
            } else {
                  receiverId = convo.userOne
            }
            axios.post(`${process.env.REACT_APP_API_URL}/api/messages/${receiverId}/${conversationID}/${this.props.user._id}`,{message:this.state.message},{ withCredentials: true })
              .then((response) =>{
                    console.log(this.state, 'ello there marta')
                    this.props.history.push(`/messageboard/${conversationID}`)
                  })
              .catch(err => console.log(err));
          };
        

      getMyMessages = () =>{
            const conversationID = this.props.match.params.id
          axios.get(`${process.env.REACT_APP_API_URL}/api/messages/${conversationID}`, {withCredentials: true})
            .then((messages) => {
                  this.setState({
                        convo:messages.data
                  })
            })
      }

      componentDidMount (){
            this.getMyMessages()
      }

      
      handleChange = event => {
            const { name, value } = event.target;
            this.setState({ [name]: value });
      }


      render() {
            return (
                  <div>
                     <h1>MESSAGE BOARD</h1>
                     <section class="message-board">
                     <div class="title">
                     <h2>
                     Leave a message
                    </h2>
                  </div>
                  <form onSubmit = {this.handleMessageSubmit}>
        <textarea name = 'message' value = {this.state.message} onChange = {this.handleChange} class="message" type="text"></textarea><br/>
        <input value = "submit" type="submit" class="submit-btn"/>
        </form>
        <div class="display-area">
            Existing comment:
        </div>
        
    </section>
                  </div>
            )
      }
}










export default withAuth(MessageBoard);

