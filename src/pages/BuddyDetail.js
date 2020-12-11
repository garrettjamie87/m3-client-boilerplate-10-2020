import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
import axios from "axios";

class BuddyDetail extends Component {
              
               state = {oneBud:{},
               isSaved:false}
            
               handleSave = () => {
                  const userID = this.props.match.params.id
                  axios.post(`http://localhost:5000/api/buddy/${userID}`, {withCredentials: true})
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
                  <div>
                     <h1>Buddy detail</h1>  
                     <div>{this.state.oneBud.username}</div> 
                     {this.state.isSaved ?
                 
                  <button>Saved</button>:
                  <button onClick = {this.handleSave}>Save</button>}


                  </div>
            )
      }
}







export default withAuth(BuddyDetail);
