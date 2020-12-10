import React, { Component } from "react";
import { withAuth } from '../context/auth-context';

class AboutMe extends Component {
  state = {
    sex: "",
    topics: "",
    level: "",
    language: ""
  }
  render() {
    return (
      <div>
      <h2>Welcome {this.props.user && this.props.user.username}</h2>
      <h1>Tell us more about yourself</h1>
      
      <form action="/" method="POST"> 
      <label for='sex'>Sex: </label><br />
      <select className='input-field'  id="sex" name="sex">
      <option value="I'm a male man ">'I'm a male man'</option>
      <option value="I'm a female lady">'I'm a female lady'</option>
      </select>
      <br/>



      <label for='topics'>The topics that interest me are: </label><br />
      <select className='input-field'  id="topics" name="topics">
      <option value="Sports">Sports</option>
      <option value="The Arts">The Arts</option>
      <option value="Politics">Politics</option>
      </select>
      <br/>

      <label for='level'>My level is: </label><br />
      <select className='input-field'  id="level" name="level">
      <option value="Elementary">"Elementary"</option>
      <option value="Intermediate">"Intermediate"</option>
      <option value="Advanced">"Advanced"</option>
      </select>

      <label for='level'>Language: </label><br />
      <select className='input-field'  id="language" name="language">
      <option value="Elementary">"I'm Spanish looking for English"</option>
      <option value="Intermediate">"I'm English looking for Spanish'"</option>
      </select>

      <br/> 

<button className="submit-button" type="submit">Submit</button>
        
        </form>
      </div>
   
       
    );
  }
}


export default withAuth(AboutMe);
