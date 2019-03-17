import React, { Component } from "react";
import { connect } from "react-redux";

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
    return (
      <div>
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
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const currentUser = users[authedUser];
  const allQuestionIds = Object.keys(questions);
  const answeredQuestions = Object.keys(currentUser.answers).map(
    id => questions[id]
  );
  const unansweredQuestions = allQuestionIds
    .filter(id => !answeredQuestions.includes(id))
    .map(id => questions[id]);
  return {
    answeredQuestions,
    unansweredQuestions
  };
}

export default connect(mapStateToProps)(Dashboard);
