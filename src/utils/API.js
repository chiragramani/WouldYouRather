import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      questions,
      users
    })
  );
}

/// So that it becomes async which is the realistic behavior
export function login() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
