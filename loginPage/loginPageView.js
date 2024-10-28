function loginView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="login-page">
            <div class='form-input'>
                <input
                    type='text'
                    placeholder='Enter username'
                    onchange='model.input.login.userName=this.value.trim()'
                    required
                />
                <input 
                    type='text'
                    placeholder='Enter password'
                    onchange='model.input.login.password=this.value'
                    required
                />
                <button onclick="login()">Login</button>
                <p>Har du ikke profil? 
                <span onclick='registerUser()'>Registrer her</span></p>
            </div>
        </div>
    `;
}
