import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
  didTapOnViewPoll = e => {
    e.preventDefault();
  };

  render() {
    const { question, author } = this.props;
    return (
      <div className="question">
        <img src={author.avatarURL} alt="Avatar" />
        <div className="question-info">
          <h4>{question.author} asks: Would you rather</h4>
          <p> ...{question.optionOne.text} </p>
          <button onClick={this.didTapOnViewPoll}>View Poll</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const author = users[question.author];
  return {
    question,
    author
  };
}

export default connect(mapStateToProps)(Question);
