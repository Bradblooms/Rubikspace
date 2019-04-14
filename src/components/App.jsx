import React, { Component } from "react";
import { firebaseApp } from "../firebase";
import { connect } from "react-redux";
import Mason from "mason-library";
import { Canvas } from "mason-library";
class App extends Component {
  componentDidMount() {
    Mason({
      apiKey: "mzfqIssnQgbCRptPUHmi8Qhc30a1JANnFPeKq7zpUG4=",
      projectId: "5cb20b414081050003976d08"
    });
  }

  signOut() {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div>
        <button className="btn btn-danger" onClick={() => this.signOut()}>
          Sign Out
        </button>
        <Canvas id="5cb20d844081050003976d23" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);

  return {};
}

export default connect(
  mapStateToProps,
  null
)(App);
