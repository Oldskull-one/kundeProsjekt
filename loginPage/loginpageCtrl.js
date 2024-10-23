function login() {
  let user = getUserByName(model.input.login.userName);

  model.app.currentPage = "homepage";
  updateView();
}

function registerUser() {
  model.app.currentPage = "createAccountpage";
  updateView();
}

function getUserByName(userName) {
  return model.data.users.find((user) => user.userName === userName);
}
