import { _getUsers, _getQuestions } from "../utils/_Data";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return Promise.all([_getUsers, _getQuestions])
      .then(([users, questions]) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
      })
      .then(() => dispatch(hideLoading()))
      .catch(e => console.log("Error while fetching initial data: ", e));
  };
}
