function createAccView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
        <div class="register-page">
            <div class='form-input'>
                <label for="email">Email:</label>
                <input type="text" name="email" placeholder="Enter your email"
                    onchange="model.input.createAccount.email=this.value.trim()"
                >
                
                <label for="username">Username:</label>
                <input type="text" name="username" placeholder="Choose a username"
                    onchange="model.input.createAccount.userName=this.value.trim()"
                >
                
                <label for="password">Password:</label>
                <input type="text" name="password" placeholder="Create a password"
                onchange="model.input.createAccount.password=this.value"
                >
                <label for="password">Gjenta password:</label>
                <input type="text" name="password" placeholder="Rewrite password"
                onchange="model.input.createAccount.rewritePassword=this.value"
                >
                
                <button onclick="signUp()">Register</button>
            </div>
        </div>
    `;
}
