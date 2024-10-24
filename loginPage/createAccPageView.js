function createAccView(){
    document.getElementById('app').innerHTML= `
    
    <div class='form-input'>
    <label for="email">Email:</label>
    <input type="text" name="email">
    <label for="username">Username:</label>
    <input type="text" name="username">
    <label for="password">Password:</label>
    <input type="text" name="password">
    <button onclick="signUp()">Register</button>
    
    </div>
    
    
    `
}