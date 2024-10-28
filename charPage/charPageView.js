function charPageView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
      <div class="main">

          <div class="createChar">
              <h2>Create a new character</h2>
              <label for="char-name">Create your character's name</label>
              <input 
                type="text"
                id="char-name" 
              />
              <h4>Select your archetype</h4>

              <div class="show-chars">
                ${showChars()}
              </div>
          </div>

          <div class="currentChar">
              <h2>Current characters</h2>
              ${showCurrentChar()}
          </div>

      </div>
  `;
}

function showChars() {
  let chars = model.data.characters.map((char) => {
    return ` 
      <div class="show-char">
        <img src= ${char.image}>
        <p>${char.codingPoints} Coding points</p>
        <p>${char.nkPoints} NK points</p>
        <h4>${char.characterArquetype}</h4>
      </div>  
         `;
  });
  return chars.join('');
}

function showCurrentChar() {
  let currentUserData = model.data.userData.filter((data) => data.userId === 1);

  let html = currentUserData.map((char) => {
    return `
        <div class="user-char">
            <img src="#" alt="current char img" />
            <p>${char.characterName}</p>
            <p>${char.characterArquetype}</p>
            <p>Level: ${char.currentLvl}</p>
        </div>
    `;
  });

  return html; 
}
