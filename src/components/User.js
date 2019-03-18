import React, { Component } from "react";
import { connect } from "react-redux";
class User extends Component {
  render() {
    const { user } = this.props;
    const { questions, answers } = user;
    const questionsCount = questions.length || 0;
    const answersCount = Object.keys(answers).length || 0;
    const totalScore = questionsCount + answersCount;
    return (
      <div className="user">
        <img src={user.avatarURL} alt="avatar" />
        <div className="userinfo">
          <h4>{user.name}</h4>
          <p>Answered questions: {answersCount}</p>
          <p>Created questions: {questionsCount}</p>
          <p>
            <b>Total score: {totalScore}</b>
          </p>
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
