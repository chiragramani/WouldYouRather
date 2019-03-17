import React, { Component } from "react";
import { connect } from "react-redux";
class User extends Component {
  render() {
    const { user } = this.props;
    const { questions, answers } = user;
    const questionsCount = questions.length || 0;
    const answersCount = answers.length || 0;
    const totalScore = questionsCount + answersCount;
    return (
      <div className="user">
        <img src={user.avatarURL} alt="avatar" />
        <div className="userinfo">
          <p>{user.name}</p>
          <p>Answered questions: {questionsCount}</p>
          <p>Created questions: {answersCount}</p>
          <p>Total score: {totalScore}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user
  };
}

export default connect(mapStateToProps)(User);
