import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

class Dashboard extends Component {
  state = {
    filter: "unanswered-questions"
  };
  handleFilterChange = e => {
    e.preventDefault();
    this.setState({
      filter: e.target.name
    });
  };

  render() {
    const { filter } = this.state;
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <div className="center">
        <div className="filters">
          <button
            className={
              filter === "unanswered-questions"
                ? "filterButton button--on"
                : "filterButton button--off"
            }
            name="unanswered-questions"
            onClick={this.handleFilterChange}
          >
            Unanswered Questions
          </button>
          <button
            className={
              filter === "answered-questions"
                ? "filterButton button--on"
                : "filterButton button--off"
            }
            name="answered-questions"
            onClick={this.handleFilterChange}
          >
            Answered Questions
          </button>
        </div>
        <QuestionList
          ids={
            filter === "unanswered-questions"
              ? unansweredQuestions
              : answeredQuestions
          }
        />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const currentUser = users[authedUser];
  const allQuestionIds = Object.keys(questions);
  const answeredQuestions = Object.keys(currentUser.answers);
  const unansweredQuestions = allQuestionIds.filter(
    id => !answeredQuestions.includes(id)
  );
  return {
    answeredQuestions,
    unansweredQuestions
  };
}

export default connect(mapStateToProps)(Dashboard);
