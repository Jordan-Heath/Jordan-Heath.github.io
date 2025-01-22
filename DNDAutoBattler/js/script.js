// Monster and character data


// Populate page with random monsters and character sheets on load
const battle = new Battle();
battle.generateMonsters();
battle.generateCharacters();
battle.drawMonsters();
battle.drawCharacters();

// Add event listener
document.getElementById('startBattle').addEventListener('click', () => {
    battle.start();
});


function selectPage(pageID) {
    switch (pageID) {
        case 'characterCreator':
            document.getElementById('characterCreator').style.display = 'block';
            document.getElementById('battler').style.display = 'none';
            break;
        case 'battler':
            document.getElementById('characterCreator').style.display = 'none';
            document.getElementById('battler').style.display = 'block';
            break;
    }
}