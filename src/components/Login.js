import React, { Component } from "react";
import { connect } from "react-redux";

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

  didTapOnLogin = () => {};

  render() {
    const { users } = this.props;
    const { selectedUserId } = this.state;
    const selectedUser =
      selectedUserId === null
        ? null
        : users.filter(user => user.id === selectedUserId)[0];
    return (
      <div className="container-login">
        <h3>Welcome to Would You Rather App!</h3>
        <h4>Please sign in to continue</h4>
        <img
          src={selectedUser === null ? "https://image.flaticon.com/icons/svg/149/149071.svg" : selectedUser.avatarURL}
          alt="Avatar"
        />
        <div className="select-wrapper">
          <select
            value={selectedUser === null ? "" : selectedUser.id}
            onChange={this.didSelectUser}
          >
            <option value="" disabled>
              Select User
            </option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <button disabled={selectedUser === null} onClick={this.didTapOnLogin}>
          Login
        </button>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map(id => users[id])
  };
}

export default connect(mapStateToProps)(Login);
