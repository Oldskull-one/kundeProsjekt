function signUp() {
  let user = getUserByEmail(model.input.createAccount.email);
//   console.log(user);

  if (user) {
    alert(
      "Det finnes allerede en bruker som: " +
        model.input.createAccount.email +
        "\nBruk en annen epost."
    );
  } else if (
    !model.input.createAccount.email ||
    !model.input.createAccount.userName ||
    !model.input.createAccount.password ||
    !model.input.createAccount.rewritePassword
  ) {
    alert("Feltene må fylles ut");
  } else if (
    model.input.createAccount.password !==
    model.input.createAccount.rewritePassword
  ) {
    alert("Passordene stemmer ikke med hverandre!");
  } else {
    model.data.users.push({
      userId: model.data.users.length + 1,
      userName: model.input.createAccount.userName,
      userEmail: model.input.createAccount.email,
      password: model.input.createAccount.password,
      charList: [],
    });

    model.input.createAccount.userName = "";
    model.input.createAccount.email = "";
    model.input.createAccount.password = "";
    model.input.createAccount.rewritePassword = "";
  }

  model.app.currentPage = "loginpage";
  updateView();
}

function getUserByEmail(userEmail) {
  return model.data.users.find((user) => user.userEmail === userEmail);
}
