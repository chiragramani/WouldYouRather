import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";

class Leaderboard extends Component {
  render() {
    const { userIds } = this.props;
    return (
      <div>
        <ul>
          {userIds.map(id => (
            <li key={id}>
              <User id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users).sort((a, b) => {
      const aCount =
        (users[a].questions.length || 0) + (Object.keys(users[a].answers).length || 0);
      const bCount =
        (users[b].questions.length || 0) + (Object.keys(users[b].answers).length || 0);
      return bCount - aCount;
    })
  };
}

export default connect(mapStateToProps)(Leaderboard);
