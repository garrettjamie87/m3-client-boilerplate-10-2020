import React, { Component } from "react";
import { withAuth } from "../context/auth-context";
import axios from "axios";
import "./aboutme.css";
import Button from "react-bootstrap/Button";


class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: "",
      topics: "",
      level: "",
      language: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { sex, topics, level, language } = this.state;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/homepage`,
        { sex, topics, level, language },
        { withCredentials: true }
      )
      .then(() => this.props.history.push("/mybuddies"))

      .catch(err => console.log(err));
  };

  handleChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {

    return (

      <div className="aboutme">

        <h1>
          Welcome <u>{this.props.user && this.props.user.username}</u>
        </h1>
        <h2>Tell us more about yourself</h2>

        <div className="table">
          <form onSubmit={this.handleFormSubmit}>
            <label for="sex">Sex: </label>
            <br />
            <select
              className="input-field"
              id="sex"
              name="sex"
              onChange={this.handleChange}
            >
              <option value="I'm a male man ">'I'm a male man'</option>
              <option value="I'm a female lady">'I'm a female lady'</option>
            </select>
            <br />
            <br />
            <label for="topics">The topics that interest me are: </label>
            <br />
            <select
              className="input-field"
              id="topics"
              name="topics"
              onChange={this.handleChange}
            >
              <option value="Sports">'Sports'</option>
              <option value="The Arts">'The Arts'</option>
              <option value="Politics">'Politics'</option>
            </select>
            <br />
            <br />
            <label for="level">My level is: </label>
            <br />
            <select
              className="input-field"
              id="level"
              name="level"
              onChange={this.handleChange}
            >
              <option value="Elementary">"Elementary"</option>
              <option value="Intermediate">"Intermediate"</option>
              <option value="Advanced">"Advanced"</option>
            </select>
            <br />
            <br />
            <label for="language">Language: </label>
            <br />
            <select
              className="input-field"
              id="language"
              name="language"
              onChange={this.handleChange}
            >
              <option value="I'm Spanish looking for English">
                "I'm Spanish looking for English"
              </option>
              <option value="I'm English looking for Spanish">
                "I'm English looking for Spanish'"
              </option>
            </select>
            <br /> <br />
            <Button variant="primary" type="submit">
              Submit &#x2192;
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(AboutMe);
