
const newCharacter = {
    characterName: "",
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
    
    if (!user) {
      alert("No user logged in!");
      return;
    }
  
    if (!newCharacter.characterName || !newCharacter.archetype) {
      alert("Please enter a character name and select an archetype.");
      return;
    }
  

    const newCharId = model.data.charData.length + 1;
    const character = {
      charId: newCharId,
      characterName: newCharacter.characterName,
      health: 100 + newCharacter.archetype.nkBonus,
      coding: 50 + newCharacter.archetype.codingBonus,
      nk: 50 + newCharacter.archetype.nkBonus,
      backpack: [],
      arcName: newCharacter.archetype.arcName,
    };
  
    model.data.charData.push(character);
    user.charList.push(newCharId);
  
    newCharacter.characterName = "";
    newCharacter.archetype = null;
  
    charPageView();
  }

  
  
  function addCharacter() {
    const user = model.data.users.find(user => user.userId === model.app.userLoggedIn);
    
    if (!user) {
      alert("No user logged in!");
      return;
    }
  
    if (!newCharacter.characterName || !newCharacter.archetype) {
      alert("Please enter a character name and select an archetype.");
      return;
    }
  
    const baseHealth = 100;  // Helsetilstand
    const baseWallet = 500;  // Starting coins in wallet
    const baseCoding = 20 + newCharacter.archetype.codingBonus;  // Kodeferdighetsmåleren
    const baseNK = 20 + newCharacter.archetype.nkBonus;          // NK-ferdighetsmåleren
  
    const newCharId = model.data.charData.length + 1;
    const character = {
      charId: newCharId,
      characterName: newCharacter.characterName,
      health: baseHealth,
      coding: baseCoding,
      nk: baseNK,
      wallet: baseWallet,
      backpack: [],
      arcName: newCharacter.archetype.arcId,
    };
  
    model.data.charData.push(character);
    model.data.users[3].charList.push(newCharId);
  
    newCharacter.characterName = "";
    newCharacter.archetype = null;
  
    charPageView();
  }
  