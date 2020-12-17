import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
import axios from "axios";
import {Link} from "react-router-dom"
import "./mybuddieslist.css";
import Button from "react-bootstrap/Button";
import avatar from "../images/blankavatar.png";
import Navbar from './../components/Navbar';




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
            return(
<>
                  <Navbar/>

                  <div className = 'my-buddies-list'>

                     <h1 className='heading'>YOUR BUDDIES</h1>   
                        {this.state.listOfBuddies.buddyId && this.state.listOfBuddies.buddyId.map((buddy)=>{
                              return (
                              <div >
                                
                                   
                                      
                                      <Link to = {`/buddydetail/${buddy._id}`}>
                                    
                                    <ul className = 'list'>
                                    <img className= 'avatar' src= {avatar}/>

                                         <li> {buddy.username}</li>
                                         {/* <li> {buddy.level}</li>
                                         <li> {buddy.topics}</li> */}
                                        
                                     </ul>
                                    
                                     </Link>

                                     <Button className='delete' onClick = {()=>{this.handleDelete(buddy._id)}}>DELETE</Button>
                                          
                          </div>
                          )
                    }
                    )}
                  </div>
                  </>
            )
      }
}








export default withAuth(MyBuddiesList);