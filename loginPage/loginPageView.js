
function loginView(){
    document.getElementById('app').innerHTML= `
    
    <div class='form-input'>
    <input
    type='text'
    placeholder='Enter username'
    onchange= 'model.input.login.userName=this.value'
    >
    <input 
    type='password'
    placeholder='Enter passord'
    onchange= 'model.input.login.password=this.value'
    >
    <button onclick="login()">Login</button>
    <p>Har du ikke profil?
    <span onclick='registerUser()'>Registrer her</span></p>
    </div>
    
    
    `
   
}

