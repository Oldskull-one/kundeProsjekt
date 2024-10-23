
updateView();
function updateView(){
    let page = model.app.currentPage
    if(page==="loginpage"){
        loginView();
    }
    else if(page==="createAccountpage"){
        createAccView();
    }
    
};