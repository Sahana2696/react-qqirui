import React, { Component } from 'react';
import View from './View';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isUserLoggedIn: false
    }
  }
  handleUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  handlePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onClear() {
    this.setState({ username: '', password: '' })
  }

  onSubmit() {
    if (this.state.username == "test" && this.state.password == "test") {
      this.setState({ isUserLoggedIn: true })
      // this.setState({update:false})
    }
    else {
      alert("Submission failed");
    }

  }

  render() {
    return (

      <div>
        <div className="col-lg-4">
          <h3>Login Page</h3> <br />
          <label> Username:</label>
          <input type="text"
            value={this.state.username}
            onChange={this.handleUsername.bind(this)}
            className="form-control" /> <br />

          <label> Password:</label>
          <input type="password"
            value={this.state.password}
            onChange={this.handlePassword.bind(this)}
            className="form-control" /> <br />

          <button type="button"
            className="btn btn-info form-group"
            onClick={this.onSubmit.bind(this)} >Submit</button>

          <button type="button"
            className="btn btn-info form-group"
            onClick={this.onClear.bind(this)}>Clear</button>
        </div>
        {this.state.isUserLoggedIn &&
          <View
            username={this.state.username}
            password={this.state.password}
          />
        }
      </div>

    )
  }
}
