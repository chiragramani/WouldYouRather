import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import LoadingBar from "react-redux-loading";
import PrivateRoute from "./PrivateRoute";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    const { loading, isAuthenticated } = this.props;
    return (
      <Router>
        <div>
          <LoadingBar />
          <Nav />
          {loading ? null : (
            <div>
              <Route path="/" exact component={Login} />
              <PrivateRoute
                path="/home"
                exact
                component={Dashboard}
                isAuthenticated={isAuthenticated}
              />
              <PrivateRoute
                path="/leaderboard"
                exact
                component={Leaderboard}
                isAuthenticated={isAuthenticated}
              />
              <PrivateRoute
                path="/new"
                exact
                component={NewQuestion}
                isAuthenticated={isAuthenticated}
              />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    loading: users === null,
    isAuthenticated: authedUser !== null
  };
}

export default connect(mapStateToProps)(App);
