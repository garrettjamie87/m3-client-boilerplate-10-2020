import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AboutMe from './pages/AboutMe';
import MyBuddies from './pages/MyBuddies'
import BuddyDetail from './pages/BuddyDetail'
import MyBuddiesList from './pages/MyBuddiesList'
import EditProfile from './pages/EditProfile'
import MessageBoard from './pages/MessageBoard'



import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  render() {
    return (
      <div className="container">
        
        <Navbar />


        <Switch>
          <Route exact path="/" component={Home} />


          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/aboutme" component={AboutMe} />
          <PrivateRoute exact path="/mybuddies" component={MyBuddies} />
          <PrivateRoute exact path="/buddydetail/:id" component={BuddyDetail} />
          <PrivateRoute exact path="/mybuddieslist/:id" component={MyBuddiesList} />

          <PrivateRoute exact path="/editprofile" component={EditProfile} />
          <PrivateRoute exact path="/messageboard/:id" component={MessageBoard} />




        </Switch>
      </div>
    );
  }
}

export default App;
