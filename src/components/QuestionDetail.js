import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
class QuestionDetail extends Component {
  state = {
    selected: "optionOne",
    answered: false
  };

  handleRadioChange = e => {
    this.setState({
      selected: e.target.name
    });
  };

  handleVote = e => {
    e.preventDefault();
    const { question, dispatch } = this.props;
    const { selected } = this.state;
    dispatch(handleAddAnswer(question.id, selected)).then(() =>
      this.setState({
        isAnswered: true
      })
    );
  };

  render() {
    const { answered } = this.state;
    if (answered === true) {
      return <Redirect to="/home" />;
    }

    const { question, isAnswered, author, answerByUser, totalUsers } = this.props;
    if (!question) {
      return <div>Question does not exist.</div>;
    }
    const { optionOne, optionTwo } = question;
    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;
    const optionOneVotesPercentage = (optionOneVotes/totalUsers*100).toFixed(2);
    const optionTwoVotesPercentage = (optionTwoVotes/totalUsers*100).toFixed(2)
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
              <h4>Others voted: </h4>
              <p>
                {optionOne.text} Total: {optionOneVotes} votes | {optionOneVotesPercentage}% votes
              </p>
              <p>
                {optionTwo.text} Total: {optionTwoVotes} votes | {optionTwoVotesPercentage}% votes
              </p>
            </Fragment>
          )}
          {!isAnswered && (
            <form>
              <div>
                <span>
                  <input
                    type="radio"
                    name="optionOne"
                    onChange={this.handleRadioChange}
                    checked={this.state.selected === "optionOne"}
                  />
                  {optionOne.text}
                </span>
              </div>
              <div>
                <span>
                  <input
                    type="radio"
                    name="optionTwo"
                    onChange={this.handleRadioChange}
                    checked={this.state.selected === "optionTwo"}
                  />
                  {optionTwo.text}
                </span>
              </div>
              <button onClick={this.handleVote}>Answer!</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id] || null;
  const author = question ? users[question.author]: null;
  const isAnswered = Object.keys(users[authedUser].answers).includes(id);
  const answerByUser = users[authedUser].answers[id];
  return {
    question,
    isAnswered,
    author,
    answerByUser,
    totalUsers: Object.keys(users).length
  };
}

export default connect(mapStateToProps)(QuestionDetail);
