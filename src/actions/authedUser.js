import { showLoading, hideLoading } from "react-redux-loading";
import { login } from "../utils/API.js";
export const AUTHED_USER = "AUTHED_USER";

function setAuthedUser(id) {
  return {
    type: AUTHED_USER,
    id
  };
}

export function handleLogin(id) {
  return dispatch => {
    dispatch(showLoading());
    return login()
      .then(() => dispatch(setAuthedUser(id)))
      .then(() => dispatch(hideLoading()))
      .catch(e => {
        dispatch(hideLoading());
        console.log("Error while logging in user:", e);
      });
  };
}

export function handleLogout() {
  return dispatch => {
    dispatch(showLoading());
    return login()
      .then(() => dispatch(setAuthedUser(null)))
      .then(() => dispatch(hideLoading()))
      .catch(e => {
        dispatch(hideLoading());
        console.log("Error while logging in user:", e);
      });
  };
}
