import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
import axios from "axios";
import {Link} from "react-router-dom"
import "./mybuddies.css";
import Button from "react-bootstrap/Button";
import avatar from "../images/blankavatar.png";




 class MyBuddies extends Component {
      constructor(props){
            super(props)
            this.state = {
              listOfBuddies: [],
              userInfo:{}

            } 
      }

      getMyBuddies = () =>{
            axios.get(`${process.env.REACT_APP_API_URL}/api/matchpage`, {withCredentials: true})
            .then((ourBuddies) => {
                  console.log(ourBuddies)
                  this.setState({
                        listOfBuddies:ourBuddies.data
                  })
            })
            
      }

      getOneBuddy = () =>{
            axios.get(`${process.env.REACT_APP_API_URL}/api/matchpage/${this.props.user._id}`, {withCredentials: true})
      .then((actualUser)=> {
            console.log('hahahahahaahah', actualUser)
            this.setState({
                  userInfo:actualUser.data
            })
      })
}

      componentDidMount(){
            this.getMyBuddies()
            this.getOneBuddy()
      }

      
      render() {

            return(
                  <div>
                    
                     <h1>Your Matches</h1>   
                        
                        {this.state.listOfBuddies.map((buddy)=>{
                              
                              return (
                              
                              <div>
                                    {this.state.userInfo.level === buddy.level && this.state.userInfo.sex === buddy.sex ? 
                                    
                                    (
                                      
                                      <Link to = {`/buddydetail/${buddy._id}`}>
                                    
                                    <ul>
                                    <img className= 'avatar' src= {avatar}/>
                                         <li className = 'username'> {buddy.username}</li>
                                         {/* <li> {buddy.level}</li>
                                         <li> {buddy.topics}</li> */}
                                          
                                     </ul>
                                    
                                     </Link>

                                ): null}
                          </div>
                          )
                    }
                    )}
                    <Button href= '/EditProfile' className='mybuddiesbutton'>Edit Profile</Button>

                  </div>
            )
      }
}










export default withAuth(MyBuddies);
