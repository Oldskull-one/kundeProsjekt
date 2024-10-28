function charPageView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
      <div class="main">
          <div class="createChar">
              <h2>Create a new character</h2>
              <label for="char-name">Enter your character's name</label>
              <input 
                type="text"
                id="char-name"
                placeholder="Character Name"
                onchange="updateCharacterName(this.value)"
              />
              <h4>Select your archetype</h4>
              <div class="show-arcs">
                ${showArc()}
              </div>
              <button onclick="addCharacter()">Create Character</button>
          </div>

          <div class="currentChar">
              <h2>Current characters</h2>
              ${showCurrentChar()}
          </div>
      </div>
  `;
}


function showArc() {
  return model.data.archetype.map((char) => {
    return /*HTML*/`
      <div 
        class="show-char" 
        id="arc-${char.arcId}"
        onclick="selectArchetype(${char.arcId})"
      >
        <img src="${char.image}" alt="${char.arcName}">
        <p>${char.codingBonus} Coding points</p>
        <p>${char.nkBonus} NK points</p>
        <h4>${char.arcName}</h4>
      </div>
    `;
  }).join('');
}

function showCurrentChar() {
  const currentUser = model.data.users.find(user => user.userId === model.app.userLoggedIn);
  
  if (!currentUser || !currentUser.charList) return "<p>No characters available</p>";

  let userCharacters = currentUser.charList
    .map(charId => model.data.charData.find(char => char.charId === charId))
    .filter(character => character !== undefined); 

  let html = userCharacters.map(char => {
    return /*HTML*/`
      <div class="user-char">
          <img src="${char.image || '#'}" alt="current char img" />
          <p>${char.characterName}</p>
          <p>Health: ${char.health}</p>
          <p>Coding: ${char.coding}</p>
          <p>NK: ${char.nk}</p>
      </div>
    `;
  }).join('');

  return html || "<p>No characters available</p>";
}
