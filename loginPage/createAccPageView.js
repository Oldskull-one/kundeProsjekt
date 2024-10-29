function createAccView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
        <div class="register-page">
            <div class='form-input'>
                
                <input type="text" name="email" placeholder="Enter your email"
                    onchange="model.input.createAccount.email=this.value.trim()"
                >
                
               
                <input type="text" name="username" placeholder="Choose a username"
                    onchange="model.input.createAccount.userName=this.value.trim()"
                >
                
                
                <input type="text" name="password" placeholder="Create a password"
                onchange="model.input.createAccount.password=this.value"
                >
               
                <input type="text" name="password" placeholder="Rewrite password"
                onchange="model.input.createAccount.rewritePassword=this.value"
                >
                
                <button onclick="signUp()">Register</button>
            </div>
        </div>
    `;
}
