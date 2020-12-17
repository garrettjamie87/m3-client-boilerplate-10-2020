import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
import axios from "axios";
import {Link} from "react-router-dom"
import "./mybuddies.css";
import Button from "react-bootstrap/Button";
import avatar from "../images/blankavatar.png";
import Navbar from './../components/Navbar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
                  <div className = 'mybuddies'>
                          <Navbar />

                    
                     <h1>YOUR MATCHES</h1>   
                        
                        {this.state.listOfBuddies.map((buddy)=>{
                              
                              return (
                              
                              <div>
                                    {this.state.userInfo.level === buddy.level && this.state.userInfo.sex === buddy.sex ? 
                                    
                                    (
                                      <Link to = {`/buddydetail/${buddy._id}`}>
                                    
                                    
                                     <Container fluid="md">
                                           <Row>
                                          <Col>
                                          <img className= 'avatar' src= {avatar}/></Col>

                                          <Col className = 'username'>{buddy.username}</Col>
                                          </Row>
                                          </Container>
                                     </Link>
                                ): null}
                          </div>
                          )
                    }
                    )}
                    <Button href= '/EditProfile' className='mybuddiesbutton'>EDIT PROFILE &#x2192;</Button>

                  </div>
            )
      }
}










export default withAuth(MyBuddies);
