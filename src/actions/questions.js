import { saveQuestion, saveQuestionAnswer } from "../utils/API.js";
import { showLoading, hideLoading } from "react-redux-loading";
import { handleInitialData } from "./shared";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: getState().authedUser
    })
      .then(question => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
      .catch(e => {
        dispatch(hideLoading());
        console.log("Error while adding question: ", e);
      });
  };
}

export function handleAddAnswer(qid, answer) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    return saveQuestionAnswer({
      qid,
      answer,
      authedUser: getState().authedUser
    })
      .then(() => dispatch(handleInitialData()))
      .then(() => dispatch(hideLoading()))
      .catch(e => {
        dispatch(hideLoading());
        console.log("Error while adding question: ", e);
      });
  };
}
