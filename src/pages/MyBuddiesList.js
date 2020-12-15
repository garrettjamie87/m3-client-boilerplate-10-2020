import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
import axios from "axios";
import {Link} from "react-router-dom"


class MyBuddiesList extends Component {
      constructor(props){
            super(props)
            this.state = {
              listOfBuddies: []
            } 
      }

      getMyBuddiesList = () =>{
            axios.get(`${process.env.REACT_APP_API_URL}/api/mybuddypage/${this.props.match.params.id}`, {withCredentials: true})
            .then((ourBuddies) => {
                  console.log(ourBuddies.data)
                  this.setState({
                        listOfBuddies:ourBuddies.data
                  })
            })
           
      }

      handleDelete = (buddyId) =>{
      axios.delete(`${process.env.REACT_APP_API_URL}/api/buddy/${buddyId}/user/${this.props.user._id}`, {withCredentials: true})
      .then((response)=>{
      console.log(response)
      this.getMyBuddiesList()
      })

      }


      componentDidMount(){
            this.getMyBuddiesList()
      }

      
      render() {
console.log('somebullshithere')
            return(
                  <div>
                     <h1>Your Buddies</h1>   
                        {this.state.listOfBuddies.buddyId && this.state.listOfBuddies.buddyId.map((buddy)=>{
                              return (
                              <div>
                                    {/* {this.state.userInfo.level === buddy.level && this.state.userInfo.sex === buddy.sex ?  */}
                                    
                                    (
                                      
                                      <Link to = {`/buddydetail/${buddy._id}`}>
                                    
                                    <ol>
                                         <li> {buddy.username}</li>
                                         <li> {buddy.level}</li>
                                         <li> {buddy.topics}</li>
                                        
                                     </ol>
                                    
                                     </Link>

                                     <button onClick = {()=>{this.handleDelete(buddy._id)}}>DELETE</button>
                                          
                          </div>
                          )
                    }
                    )}
                  </div>
            )
      }
}








export default withAuth(MyBuddiesList);