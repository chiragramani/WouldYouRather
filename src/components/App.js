import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;
    return (
      <div>
        <LoadingBar />
        { loading ? null : <Login />}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return  {
    loading: users === null
  }
}

export default connect(mapStateToProps)(App);
