import React, { Component } from "react";
import { firebasseApp, firebaseApp } from "../firebase";
import { stat } from "fs";
import { Link } from "react-router";

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  }

  signUp() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <div className="form-inline">
        <h2>Sing Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="email"
            onChange={event => this.setState({ email: event.target.value })}
          />

          <input
            className="form-control"
            type="password"
            placeholder="password"
            onChange={event => this.setState({ password: event.target.value })}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signUp()}
          >
            Sing Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div>
          <Link to={"/signin"}>Sign in instead</Link>
        </div>
      </div>
    );
  }
}

export default SingUp;
