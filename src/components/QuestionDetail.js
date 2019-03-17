import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class QuestionDetail extends Component {
  render() {
    const { question, isAnswered, author, answerByUser } = this.props;
    const { optionOne, optionTwo } = question;
    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;
    return (
      <div className="question">
        <img src={author.avatarURL} alt="Avatar" />
        <div className="question-info">
          <h4>{author.name} asks: Would you rather</h4>
          {isAnswered && (
            <Fragment>
              <p
                className={answerByUser === "optionOne" ? "user-answer" : null}
              >
                {optionOne.text}
              </p>
              <p
                className={answerByUser === "optionTwo" ? "user-answer" : null}
              >
                {optionTwo.text}
              </p>
              <p>Others voted: </p>
              <p>
                {optionOne.text} Total: {optionOneVotes} votes
              </p>
              <p>
                {optionTwo.text} Total: {optionTwoVotes} votes
              </p>
            </Fragment>
          )}

          {/* <button onClick={this.didTapOnViewPoll}>View Poll</button> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const author = users[question.author];
  const isAnswered = Object.keys(users[authedUser].answers).includes(id);
  const answerByUser = users[authedUser].answers[id];
  return {
    question,
    isAnswered,
    author,
    answerByUser
  };
}

export default connect(mapStateToProps)(QuestionDetail);
