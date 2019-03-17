import React, { Component } from "react";

export default class Dashboard extends Component {
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
