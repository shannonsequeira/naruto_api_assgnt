const characterList = document.getElementById('characterList');
const clanList = document.getElementById('clanList');
const akatsukiList = document.getElementById('akatsukiList');
const villageList = document.getElementById('villageList');
const karaList = document.getElementById('karaList');
const kekkeigenkaiList = document.getElementById('kekkeigenkaiList');
const teamList = document.getElementById('teamList');
const tailedbeastList = document.getElementById('tailedbeastList');
const searchInput = document.getElementById('searchInput');

// Fetch character data from the API
fetch('https://narutodb.xyz/api/character?page=1&limit=1431')
  .then(response => response.json())
  .then(data => displayCharacters(data.characters));

// Function to display characters
function displayCharacters(characters) {
  characterList.innerHTML = '';
  characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.classList.add('character');
    characterElement.innerHTML = `
      <img src="${character.images[0]}" alt="${character.name}">
      <h3>${character.name}</h3>
    `;  
    characterList.appendChild(characterElement);
  });
}

// Fetch clan data from the API
fetch('https://narutodb.xyz/api/clan?page=1&limit=32')
  .then(response => response.json())
  .then(data => displayClans(data.clans));

// Function to display clans
function displayClans(clans) {
  clanList.innerHTML = '';
  clans.forEach(clan => {
    const clanElement = document.createElement('div');
    clanElement.classList.add('clan');
    clanElement.innerHTML = `
      <img src="${clan.images && clan.images.length > 0 ? clan.images[0] : ''}" alt="${clan.name}">
      <h3>${clan.name}</h3>
    `;
    clanList.appendChild(clanElement);
  });
}

// Fetch akatsuki data from the API
fetch('https://narutodb.xyz/api/akatsuki?page=1&limit=44')
  .then(response => response.json())
  .then(data => displayAkatsukis(data.akatsuki));

// Function to display akatsukis
function displayAkatsukis(akatsuki) {
  akatsukiList.innerHTML = '';
  akatsuki.forEach(akatsuki => {
    const akatsukiElement = document.createElement('div');
    akatsukiElement.classList.add('akatsuki');
    akatsukiElement.innerHTML = `
      <img src="${akatsuki.images && akatsuki.images.length > 0 ? akatsuki.images[0] : ''}" alt="${akatsuki.name}">
      <h3>${akatsuki.name}</h3>
    `;
    akatsukiList.appendChild(akatsukiElement);
  });
}

// Fetch kara data from the API
fetch('https://narutodb.xyz/api/kara?page=1&limit=32')
  .then(response => response.json())
  .then(data => displayKara(data.kara));

// Function to display kara
function displayKara(kara) {
  karaList.innerHTML = '';
  kara.forEach(kara => {
    const karaElement = document.createElement('div');
    karaElement.classList.add('kara');
    karaElement.innerHTML = `
      <img src="${kara.images && kara.images.length > 0 ? kara.images[0] : ''}" alt="${kara.name}">
      <h3>${kara.name}</h3>
      ${kara.family && kara.family.brother ? `<p>Brother: ${kara.family.brother}</p>` : ''}
      ${kara.family && kara.family.sister ? `<p>Sister: ${kara.family.sister}</p>` : ''}
    `;
    karaList.appendChild(karaElement);
  });
}

// Fetch kekkeigenkai data from the API
fetch('https://narutodb.xyz/api/kekkei-genkai?page=1&limit=39')
  .then(response => response.json())
  .then(data => displayKekkeigenkai(data.kekkeigenkai));

// Function to display kekkeigenkai
function displayKekkeigenkai(kekkeigenkai) {
  kekkeigenkaiList.innerHTML = '';
  kekkeigenkai.forEach(kekkeigenkai => {
    const kekkeigenkaiElement = document.createElement('div');
    kekkeigenkaiElement.classList.add('kekkeigenkai');
    kekkeigenkaiElement.innerHTML = `
      <img src="${kekkeigenkai.images && kekkeigenkai.images.length > 0 ? kekkeigenkai.images[0] : ''}" alt="${kekkeigenkai.name}">
      <h3>${kekkeigenkai.name}</h3>
    `;
    kekkeigenkaiList.appendChild(kekkeigenkaiElement);
  });
}

// Fetch tailed beasts data from the API
fetch('https://narutodb.xyz/api/tailed-beast?page=1&limit=10')
  .then(response => response.json())
  .then(data => displayTailedBeasts(data.tailedBeasts));

// Function to display tailed beasts
function displayTailedBeasts(tailedBeasts) {
  tailedbeastList.innerHTML = '';
  tailedBeasts.forEach(tailedBeast => {
    const tailedBeastElement = document.createElement('div');
    tailedBeastElement.classList.add('tailedBeast');
    tailedBeastElement.innerHTML = `
      <img src="${tailedBeast.images && tailedBeast.images.length > 0 ? tailedBeast.images[0] : ''}" alt="${tailedBeast.name}">
      <h3>${tailedBeast.name}</h3>
    `;
    tailedbeastList.appendChild(tailedBeastElement);
  });
}

// Fetch teams data from the API
fetch('https://narutodb.xyz/api/team?page=1&limit=191')
  .then(response => response.json())
  .then(data => displayTeams(data.teams));

// Function to display teams
function displayTeams(teams) {
  teamList.innerHTML = '';
  teams.forEach(team => {
    const teamElement = document.createElement('div');
    teamElement.classList.add('team');
    teamElement.innerHTML = `
      <img src="${team.images && team.images.length > 0 ? team.images[0] : ''}" alt="${team.name}">
      <h3>${team.name}</h3>
    `;
    teamList.appendChild(teamElement);
  });
}

// Fetch village data from the API
fetch('https://narutodb.xyz/api/village?page=1&limit=39')
  .then(response => response.json())
  .then(data => displayVillages(data.villages));

// Function to display villages
function displayVillages(villages) {
  villageList.innerHTML = '';
  villages.forEach(village => {
    const villageElement = document.createElement('div');
    villageElement.classList.add('village');
    villageElement.innerHTML = `
      <img src="${village.images && village.images.length > 0 ? village.images[0] : ''}" alt="${village.name}">
      <h3>${village.name}</h3>
    `;
    villageList.appendChild(villageElement);
  });
}

// Function to filter data by character name or superpower
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  fetch('https://narutodb.xyz/api/character?page=1&limit=1431')
    .then(response => response.json())
    .then(data => {
      const filteredCharacters = data.characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm) ||
        (character.jutsu && character.jutsu.some(jutsu => jutsu.toLowerCase().includes(searchTerm)))
      );
      displayCharacters(filteredCharacters);
    });

    // Function to filter data by clan name or clan-character
    fetch('https://narutodb.xyz/api/clan?page=1&limit=32')
    .then(response => response.json())
    .then(data => {
      const filteredClans = data.clans.filter(clan =>
        clan.name.toLowerCase().includes(searchTerm) ||
        clan.characters.some(character =>
          character.name.toLowerCase().includes(searchTerm)
        )
      );
      displayClans(filteredClans);
    });

    // Function to filter data by kara name or family member name
    fetch('https://narutodb.xyz/api/kara?page=1&limit=32')
    .then(response => response.json())
    .then(data => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const filteredKaras = data.kara.filter(kara =>
        (kara.name && kara.name.toLowerCase().includes(searchTermLowerCase)) ||
        (kara.family && kara.family.brother && kara.family.brother.toLowerCase().includes(searchTermLowerCase)) ||
        (kara.family && kara.family.sister && kara.family.sister.toLowerCase().includes(searchTermLowerCase))
      );
      displayKara(filteredKaras);
    })

    // Function to filter data by kekkeigenkai name or kekkeigenkai-character name
    fetch('https://narutodb.xyz/api/kekkei-genkai?page=1&limit=39')
    .then(response => response.json())
    .then(data => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const filteredKekkeigenkai = data.kekkeigenkai.filter(kekkeigenkai =>
        (kekkeigenkai.name && kekkeigenkai.name.toLowerCase().includes(searchTermLowerCase)) ||
        kekkeigenkai.characters.some(character => character.name.toLowerCase().includes(searchTerm))
      );
      displayKekkeigenkai(filteredKekkeigenkai);
    });

    // Function to filter data by character name or superpower
    fetch('https://narutodb.xyz/api/tailed-beast?page=1&limit=10')
    .then(response => response.json())
    .then(data => {
      const filteredtb = data.tailedBeasts.filter(tailedBeast =>
        tailedBeast.name.toLowerCase().includes(searchTerm) ||
        (tailedBeast.jutsu && tailedBeast.jutsu.some(jutsu => jutsu.toLowerCase().includes(searchTerm)))
      );
      displayTailedBeasts(filteredtb);
    });

    // Function to filter data by team name or team-character name
    fetch('https://narutodb.xyz/api/team?page=1&limit=191')
    .then(response => response.json())
    .then(data => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const filteredTeams = data.teams.filter(team =>
        (team.name && team.name.toLowerCase().includes(searchTermLowerCase)) ||
        team.characters.some(character => character.name.toLowerCase().includes(searchTermLowerCase))
      );
      displayTeams(filteredTeams);
    });

    // Function to filter data by village name or village-character name
    fetch('https://narutodb.xyz/api/village?page=1&limit=39')
    .then(response => response.json())
    .then(data => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const filteredVillage = data.villages.filter(village =>
        (village.name && village.name.toLowerCase().includes(searchTermLowerCase)) ||
        village.characters.some(character => character.name.toLowerCase().includes(searchTermLowerCase))
      );
      displayVillages(filteredVillage);
    });

    // Function to filter data by akatsuki name or superpower
    fetch('https://narutodb.xyz/api/akatsuki?page=1&limit=44')
    .then(response => response.json())
    .then(data => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const filteredAkatsuki = data.akatsuki.filter(akatsuki =>
        (akatsuki.name && akatsuki.name.toLowerCase().includes(searchTermLowerCase)) ||
        (akatsuki.jutsu && akatsuki.jutsu.some(jutsu => jutsu.toLowerCase().includes(searchTermLowerCase)))
      );
      displayAkatsukis(filteredAkatsuki);
    });



});
