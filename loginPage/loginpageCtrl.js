function login() {
  let user = getUserByName(model.input.login.userName);
  // console.log(user);
  if (!model.input.login.userName || !model.input.login.password) {
    alert("Feltene må fylles ut");
  } else if (user && user.password === model.input.login.password) {
    model.app.userLoggedIn = user.userId;
    model.app.currentPage = "charpage";

    model.input.login.userName="";
    model.input.login.password="";
    updateView();
  } else {
    alert("Brukernavn eller passord er feil!");
  }

}

function registerUser() {
  model.app.currentPage = "createAccountpage";
  updateView();
}

function getUserByName(userName) {
  return model.data.users.find((user) => user.userName === userName);
}
