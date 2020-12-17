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
            axios.get(`${process.env.REACT_APP_API_URL}/api/convos`, {withCredentials: true})
      .then((convos)=> {
            console.log('hahahahahaahah', convos.data)
            this.setState({
                  
                  listOfConvos:convos.data
            })
            console.log('HELP', this.state.listOfConvos)
      })
}
      
      
      componentDidMount(){
            this.getConversation()
      }
      
      render() {
            const currentUserId = this.props.user._id;

            return (
                  <div>
                  <p>HELOOOOOOOOOOO</p>
                       <div>
                       
                        {this.state.listOfConvos 
                              ? this.state.listOfConvos.map((convo)=>{

                                    let otherUser;
                                    if (convo.userOne._id === currentUserId) {
                                          otherUser = convo.userTwo;
                                    }
                                    else {
                                          otherUser = convo.userOne;
                                    }

                                    console.log('inside otherUser', otherUser)

                                    return (


                                          <div  key={convo._id}>
                                                <Link to={`/messageboard/${convo._id}`} >
                                                      <img src={otherUser.profilePicture}/>
                                                      <p>{otherUser.username}</p>
                                                </Link>
                                    
                                          </div>
                                    )
                        }):null
                        }
                        </div>
                  </div>
            )
      }
}

export default withAuth(MyConvos);


