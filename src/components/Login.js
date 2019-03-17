import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SelectUser from "./SelectUser";
import { handleLogin } from "../actions/authedUser";

class Login extends Component {
  state = {
    selectedUserId: null
  };

  didSelectUser = e => {
    e.preventDefault();
    const selectedId = e.target.value;
    this.setState({
      selectedUserId: selectedId
    });
  };

  didTapOnLogin = () => {
    const { dispatch } = this.props;
    const { selectedUserId } = this.state;
    dispatch(handleLogin(selectedUserId));
  };

  render() {
    const { users, authedUser } = this.props;
    if (authedUser) {
      return <Redirect to="/home" />;
    }
    const { selectedUserId } = this.state;

    const selectedUser =
      selectedUserId === null
        ? null
        : users.filter(user => user.id === selectedUserId)[0];
    const avatarURL =
      selectedUser === null
        ? "https://image.flaticon.com/icons/svg/149/149071.svg"
        : selectedUser.avatarURL;
    return (
      <div className="container-login">
        <h3>Welcome to Would You Rather App!</h3>
        <h4>Please sign in to continue</h4>
        <img src={avatarURL} alt="Avatar" />
        <SelectUser
          selectedUser={selectedUser}
          users={users}
          didSelectUser={this.didSelectUser}
        />
        <button disabled={selectedUser === null} onClick={this.didTapOnLogin}>
          Login
        </button>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.keys(users).map(id => users[id]),
    authedUser
  };
}

export default connect(mapStateToProps)(Login);
