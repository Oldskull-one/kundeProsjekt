function createAccView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="register-page">
            <div class='form-input'>
                <label for="email">Email:</label>
                <input type="text" name="email" placeholder="Enter your email">
                
                <label for="username">Username:</label>
                <input type="text" name="username" placeholder="Choose a username">
                
                <label for="password">Password:</label>
                <input type="password" name="password" placeholder="Create a password">
                
                <button onclick="signUp()">Register</button>
            </div>
        </div>
    `;
}
