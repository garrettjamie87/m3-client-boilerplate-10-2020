import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
import axios from "axios";
import "./buddydetail.css";
import Button from "react-bootstrap/Button";


class BuddyDetail extends Component {
      
      state = {oneBud:{},
      isSaved:false}

      handleSave = () => {
      const userID = this.props.user._id
      const budID = this.props.match.params.id
      console.log(userID)
      axios.put(`http://localhost:5000/api/buddy/${budID}/${userID}`, {withCredentials: true})
      .then((oneBuddyFound) => {
            console.log(oneBuddyFound)
            this.setState({
                  isSaved: true
            })
      })

      }
      

      
     componentDidMount(){

      const userID = this.props.match.params.id
      axios.get(`http://localhost:5000/api/matchpage/${userID}`, {withCredentials: true})
      .then((oneBuddyFound) => {
            this.setState({
            oneBud:oneBuddyFound.data
            
            })
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

                  </div>
            )
      }
}     







export default withAuth(BuddyDetail);
