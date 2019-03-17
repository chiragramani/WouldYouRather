import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    answer1: "",
    answer2: ""
  };

  handleAskQuestion = e => {
    e.preventDefault();
    const { answer1, answer2 } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddQuestion(answer1, answer2));
  };

  handleChange = e => {
    const name = e.target.name;
    const text = e.target.value;
    this.setState({
      [name]: text
    })
  };

  render() {
    const { answer1, answer2 } = this.state;
    const isAskCTADisabled = !(answer1 && answer2);
    return (
      <div className="newQuestion">
        <h3 className="center">Create New Question</h3>
        <h5>Complete the question..</h5>
        <h4>Would You Rather..</h4>
        <input
          placeholder="Enter Option One Text Here"
          value={answer1}
          name="answer1"
          onChange={this.handleChange}
        />
        <input
          placeholder="Enter Option Two Text Here"
          value={answer2}
          name="answer2"
          onChange={this.handleChange}
        />
        <button onClick={this.handleAskQuestion} disabled={isAskCTADisabled}>Ask this question!</button>
      </div>
    );
  }
}

export default connect()(NewQuestion);
