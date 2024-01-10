let isGameMaster = false;
let isJester = false;

function joinGame() {
    const playerName = document.getElementById('playerName').value;
    if (!playerName) {
        alert('Please enter your name.');
        return;
    }

    isGameMaster = confirm('Do you want to be the Game Master?');
    
    if (isGameMaster) {
        document.getElementById('gameMasterMessage').textContent = 'You are the Game Master!';
        document.getElementById('inputWords').classList.remove('hidden');
    } else {
        alert('Wait for the Game Master to set up the game.');
        // Simulate waiting for the Game Master to set up the game
        // In a real scenario, you would need to implement proper networking functionality.
    }

    document.getElementById('gameContainer').classList.remove('hidden');
}

function startGame() {
    const mainWord = document.getElementById('mainWord').value;
    const imposterWord = document.getElementById('imposterWord').value;

    if (!mainWord || !imposterWord) {
        alert('Please enter both words.');
        return;
    }

    // Simulate backend logic for random roles
    const roles = ['Game Master', 'Jester', 'Imposter', 'Normal'];
    const randomRoleIndex = Math.floor(Math.random() * roles.length);
    const playerRole = roles[randomRoleIndex];

    if (playerRole === 'Game Master') {
        alert('You are the Game Master! Please wait for others to receive their roles.');
    } else {
        const gameMasterName = 'RandomGameMaster'; // Replace with actual logic to get the Game Master's name
        document.getElementById('gameMasterMessage').textContent = `The Game Master is ${gameMasterName}`;
    }

    if (playerRole === 'Jester') {
        isJester = true;
        alert('You are the Jester!');
    }

    // Simulate waiting for roles to be assigned
    // In a real scenario, you would need to implement proper networking functionality.

    document.getElementById('inputWords').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('result').textContent = `Your Role: ${playerRole}`;
}