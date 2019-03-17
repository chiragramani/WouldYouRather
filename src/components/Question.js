import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

class Question extends Component {
  didTapOnViewPoll = e => {
    e.preventDefault();
    const { id } = this.props;
    this.props.history.push(`/question/${id}`)
  };

  render() {
    const { question, author } = this.props;
    const { optionOne } = question;
    return (
      <div className="question">
        <img src={author.avatarURL} alt="Avatar" />
        <div className="question-info">
          <h4>{author.name} asks: Would you rather</h4>
          <p> ...{optionOne.text} </p>
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

export default withRouter(connect(mapStateToProps)(Question));
