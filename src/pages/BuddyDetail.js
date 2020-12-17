import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
import axios from "axios";
import "./buddydetail.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"
import avatar from "../images/blankavatar.png";
import Navbar from './../components/Navbar';




class BuddyDetail extends Component {
      
      state = {oneBud:{},
      isSaved:false,
      mate: {}
}
      

      handleSave = () => {
      const userID = this.props.user._id
      const budID = this.props.match.params.id
      console.log('Checking ids', userID, budID)
      axios.put(`${process.env.REACT_APP_API_URL}/api/buddy/${budID}/${userID}`, {withCredentials: true})
      .then((oneBuddyFound) => {
            console.log(oneBuddyFound)
            this.setState({
                  isSaved: true
            })
      })

      }
      

      
     componentDidMount(){

      const userID = this.props.match.params.id
      axios.get(`${process.env.REACT_APP_API_URL}/api/matchpage/${userID}`, {withCredentials: true})
      .then((oneBuddyFound) => {
            this.setState({
            oneBud:oneBuddyFound.data
            
            })
      })

     }

     handleConversation = () => {
           const userOne = this.props.user._id
           const userTwo = this.state.oneBud._id
          
           axios.post(`${process.env.REACT_APP_API_URL}/api/createconvo/${userOne}/${userTwo}`, {withCredentials: true})
           .then((conversationCreated) => {
                 console.log(conversationCreated, 'hdhdhdhdhdhdhdhdhdhd')
            this.props.history.push(`/messageboard/${conversationCreated.data._id}`)

          
      })
      }


      render() {
            return (
                 <>
                  <Navbar/>

                  <div className="buddy-detail">
                     <h1>YOUR MATCH</h1>  
                     <img className= 'avatar' src= {avatar}/>

                     <h5 className = 'subs'>NAME:</h5>
                     <div className = 'info'>{this.state.oneBud.username}</div> <br/>
                     <h5 className = 'subs'>INTERESTED IN:</h5>
                     <div className = 'info'>{this.state.oneBud.topics}</div>  <br/>
                     <h5 className = 'subs'>LANGUAGE:</h5>
                     <div className = 'info'>{this.state.oneBud.language}</div>  <br/>



                     {this.state.isSaved ?
                 
                        <Button className ='buttons'>SAVED</Button>:
                        <Button onClick = {this.handleSave}>
            SAVE TO MY BUDDIES
          </Button>} <br/>
          <Button onClick = {this.handleConversation}>SEND A MESSAGE</Button><br/>

<div className='link-bud'>
          <Link  to = {`/mybuddieslist/${this.props.user._id}`}>VIEW MY BUDDIES</Link>
</div>
                  </div>
                  </>
            )
      }
}     







export default withAuth(BuddyDetail);
