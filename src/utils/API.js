import { _getUsers, _getQuestions } from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    questions,
    users
  }));
}

/// So that it becomes async which is the realistic behavior
export function login() {
  return new Promise(function(resolve,reject) {
    setTimeout(() => {
      resolve()
    }, 1000);
  })
}
