import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
import axios from "axios";
import Navbar from './../components/Navbar';
import "./messageboard.css";
import Button from "react-bootstrap/Button";


class MessageBoard extends Component {
      constructor(props){
            super(props)
            this.state = {
              convo: [],
             message:''
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
                   this.getMyMessages()                  
                   this.setState({
                         message:''
                   })
              })     
              .catch(err => console.log(err))
          }
        

      getMyMessages = () =>{
            const conversationID = this.props.match.params.id
          axios.get(`${process.env.REACT_APP_API_URL}/api/messages/${conversationID}`, {withCredentials: true})
            .then((messages) => {
                  console.log('messages.data', messages.data)
                  this.setState({
                        convo:messages.data
                  })
                  console.log(this.state.convo.messages)
            })
      }

      componentDidMount (){
      this.getMyMessages()
      //       // .then((messages)=>{
      //       //       this.setState
      //       // })
      //       // console.log ('hheheheheheh', this.state.convo)
       }

      
      handleChange = event => {
            const { name, value } = event.target;
            this.setState({ [name]: value });
      }


      render() {
          console.log(this.state,' state voy a cortarme als venas')
            return (
                  <div className='message-form'>
                  <Navbar />

                     <h1>MESSAGE BOARD</h1>
                     <section class="message-board">
                     <div class="title">
                     <h2>
                     Leave a message
                    </h2>
                  </div>
                  <form onSubmit = {this.handleMessageSubmit}>
        <textarea name = 'message' value = {this.state.message} onChange = {this.handleChange} class="message" type="text"></textarea><br/>
        
        <Button className='mensaje-submit' value = "submit" type="submit" class="submit-btn">SUBMIT</Button>
        
        </form>
        <div class="display-area" className = 'comment'>
            Existing comment: 
            {/* <p>{this.state.message}</p> */}
           {this.state.convo.messages ? this.state.convo.messages.map((message)=>{
                  return(
                      <p>{message.message}</p>
                  )
            }):null} 
        </div>
        
    </section>
                  </div>
            )
      }
}










export default withAuth(MessageBoard);

