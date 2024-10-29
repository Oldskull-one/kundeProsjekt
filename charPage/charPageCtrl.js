
const newCharacter = {
    characterName: model.input.createNewCharacter.characterName,
    archetype: null,
  };
  
  function updateCharacterName(name) {
    newCharacter.characterName = name;
  }
  
  function selectArchetype(arcId) {
    newCharacter.archetype = model.data.archetype.find(arc => arc.arcId === arcId);
    
    document.querySelectorAll('.show-char').forEach(charEl => {
      charEl.classList.remove('selected');
    });
    document.getElementById(`arc-${arcId}`).classList.add('selected');
  }
  
  function addCharacter() {
    const user = model.data.users.find(user => user.userId === model.app.userLoggedIn);
  
    // if (!newCharacter.characterName || !newCharacter.archetype) {
    //   alert("Please enter a character name and select an archetype.");
    //   return;
    // }
  

    const newCharId = model.data.charData.length + 1;
    const character = {
      charId: newCharId,
      characterName: model.input.createNewCharacter.characterName,
      health: 100,
      coding: 20 + newCharacter.archetype.codingBonus,
      nk: 20 + newCharacter.archetype.nkBonus,
      backpack: [],
      wallet: 500,
      arcName: newCharacter.archetype.arcName,
    };
  
    model.data.charData.push(character);
    user.charList.push(newCharId);
  
    newCharacter.characterName = "";
    newCharacter.archetype = null;
  
    charPageView();
  }
  
  