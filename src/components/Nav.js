import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleLogout } from '../actions/authedUser'

class Nav extends Component {
  onLogout = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(handleLogout())
  };

  render() {
    const { user, authedUser } = this.props;
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/home" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leaderboard
            </NavLink>
          </li>
          {authedUser !== null && (
            <Fragment>
              <li> | </li>
              <li>Hello, {user.name}</li>
              <li>
                <button onClick={this.onLogout}>Logout</button>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser];
  return {
    user,
    authedUser
  };
}

export default connect(mapStateToProps)(Nav);
