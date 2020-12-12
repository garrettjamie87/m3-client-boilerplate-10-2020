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

      getMyBuddies = () =>{
            axios.get('http://localhost:5000/api/mybuddypage', {withCredentials: true})
            .then((ourBuddies) => {
                  this.setState({
                        listOfBuddies:ourBuddies.data
                  })
            })
            axios.get(`http://localhost:5000/api/mybuddypage/${this.props.user._id}`)
            .then((actualUser)=> {
                  this.setState({
                        userInfo:actualUser.data
                  })
            })
      }

     

      componentDidMount(){
            this.getMyBuddies()
      }

      
      render() {
            console.log(this.state.userInfo)

            return(
                  <div>
                     <h1>Your Buddies</h1>   
                        {this.state.listOfBuddies.map((buddy)=>{
                              console.log('buddy', buddy, this.props.user)
                              return (
                              <div>
                                    {this.state.userInfo.level === buddy.level && this.state.userInfo.sex === buddy.sex ? 
                                    
                                    (
                                      
                                      <Link to = {`/buddydetail/${buddy._id}`}>
                                    
                                    <ol>
                                         <li> {buddy.username}</li>
                                         <li> {buddy.level}</li>
                                         <li> {buddy.topics}</li>
                                          
                                     </ol>
                                    
                                     </Link>

                                ): null}
                          </div>
                          )
                    }
                    )}
                  </div>
            )
      }
}








export default withAuth(MyBuddiesList);