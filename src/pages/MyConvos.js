import React, { Component } from "react";
import { withAuth } from '../context/auth-context';
import axios from "axios";
import {Link} from "react-router-dom"
import "./mybuddies.css";




 class MyConvos extends Component {
      constructor(props){
            super(props)
            this.state = {
              listOfConvos: []              

            } 
      }
      
      getConversation = () =>{
            axios.get(`${process.env.REACT_APP_API_URL}/api/messages/${this.props.params.match.id}`, {withCredentials: true})
      .then((actualUser)=> {
            console.log('hahahahahaahah', actualUser)
            this.setState({
                  userInfo:actualUser.data
            })
      })
}
      
      
      
      
      render() {
            return (
                  <div>
                        
                  </div>
            )
      }
}

export default withAuth(MyConvos);


