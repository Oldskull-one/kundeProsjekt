function charPageView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
      <div class="main">
          <div class="createChar">
              <h1>Create a new character</h1>
              <h2>Enter your character's name</h2>
              <input 
                type="text"
                id="char-name"
                placeholder="Character Name"
                onchange="model.input.createNewCharacter.characterName = this.value"
              />
              <h4>Select your archetype</h4>
              <div class="show-arcs">
                ${showArc()}
              </div>
              <button id="createCharButton" onclick="addCharacter()">Create Character</button>
          </div>

          <div class="currentChar">
              <h1>Current characters</h1>
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

  let html = userCharacters.map(char => {
    return /*HTML*/`
      <div class="user-char">
          <img src="${char.image}" alt="">
          <p>Character name: ${char.characterName}</p>
          <p>Health: ${char.health}</p>
          <p>Coding: ${char.coding}</p>
          <p>NK: ${char.nk}</p>
          <p>Penge: ${char.wallet}</p>
      </div>
    `;
  }).join('');

  return html || "<p>No characters available</p>";
}

// Trenger:
// - fiks layout på Archetype-knapper,
// - legg til et "choose character image",
// - fiks layout på Current Character side,
// - fiks databaseoppdatering når du oppretter new character,
// - få de Current Chracters til å oppføre seg som en knapp til startsiden
