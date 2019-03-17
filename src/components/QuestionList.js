import React, { Component } from "react";
import Question from "./Question";

export default class QuestionList extends Component {
  render() {
    const { ids } = this.props;
    return (
      <div className='center'>
        <ul>
          {ids.map(id => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
