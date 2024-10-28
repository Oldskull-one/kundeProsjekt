function signUp(){
    let user = getUserByEmail(model.input.createAccount.email)
    console.log(user);


    model.app.currentPage='loginpage';
    updateView();
}

function getUserByEmail(userEmail) {
    return model.data.users.find((user) => user.userEmail === userEmail);}