import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
import axios from "axios";
import "./buddydetail.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"



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

     handleConversation(){
           const convoID = this.state.oneBud._id
           axios.post(`${process.env.REACT_APP_API_URL}/api/createconvo/${convoID}`, {withCredentials: true})
           .then((conversationCreated) => {
            this.props.history.push('/mybuddieslist')

          
      })
      }


      render() {
            return (
                  <div className="buddydetail">
                     <h1>Buddy detail</h1>  
                     <h5>Name</h5>
                     <div>{this.state.oneBud.username}</div> <br/>
                     <h5>Interested in</h5>
                     <div>{this.state.oneBud.topics}</div>  <br/>
                     <h5>Looking for </h5>
                     <div>{this.state.oneBud.language}</div>  <br/>



                     {this.state.isSaved ?
                 
                        <Button>Saved</Button>:
                        <Button onClick = {this.handleSave}>
            Save to mybuddies list &#x2192;
          </Button>}
          <Button onClick = {this.handleConversation}>Send a message</Button>

          <Link to = {`/mybuddieslist/${this.props.user._id}`}>View my buddies list</Link>

                  </div>
            )
      }
}     







export default withAuth(BuddyDetail);
