// Set up main variables
let player1;
let player2;
let winningConditions;
let currentPlayer;
// Sounds to play for box selections, win, & draw
let soundPlay = new Audio('sound/laser.mp3');
let soundWin = new Audio('sound/macho.mp3');
let soundDraw = new Audio('sound/draw.mp3');

// Hides player label elements until game starts
document.querySelector('#p1').style.display = 'none';
document.querySelector('#p2').style.display = 'none';

// Triggers Start of Game
document.querySelector('#start-btn').addEventListener('click', () => {
    startGame();
    document.querySelector('#start-btn').remove(); // Removes the 'start' button.
})


// Changes current player turn. Called after a player makes a box choice.
const changeTurn = () => {
    if (currentPlayer === player1){
        currentPlayer = player2;
        document.querySelector('#p1').className= 'waitingTurn'
        document.querySelector('#p2').className = 'isTurn';
    }
    else {
        currentPlayer = player1;
        document.querySelector('#p2').className = 'waitingTurn';
        document.querySelector('#p1').className = 'isTurn';
    }
}

// Changes UI & offers replay button
const replayOption = () => {
    document.querySelector('#p1').style.display = 'none'; // Hides player labels
    document.querySelector('#p2').style.display = 'none';
    let replay = document.createElement('button'); // Creates replay button
    document.querySelector('#menu').appendChild(replay); // Appends replay button to game menu
    replay.textContent = 'REPLAY';
    replay.id = 'replay-btn';
    // Resets Game
    document.querySelector('#replay-btn').addEventListener('click', () => {
    window.location.reload();
    });
}

// Checks for valid win / draw condition to declare the end of a game.
const checkForWin = () => {
    // Checks if every value in a row / column / diagnol is the same.
    const endGame = arr => arr.every(value => value === arr[0]);
    // Creates a counter to determine is no win conditions exist (thus a draw).
    let findDraw = 0;
    // Finds a win condition with all of the same player symbol & declares winner.
    winningConditions.forEach(elem => {
        if (endGame(elem) && !elem.includes('')){
            soundWin.play();
            document.querySelector('footer h1').textContent = `${elem[0]} WINS!`;
            document.querySelector('main').addEventListener('click', function(event) {
                event.stopImmediatePropagation();
            }, true);
            replayOption();
        }
    })
    // Increments draw counter if a win condition contains different symbols.
    for (let i = 0; i < winningConditions.length; i++) {
        if (!endGame(winningConditions[i]) && !winningConditions[i].includes('') ) {
            findDraw++;
        }
    }
    // If after checking all 8 win conditions, the counter will reflect 8. No winner = Draw.
    if (findDraw === 8) {
        soundDraw.play();
        document.querySelector('footer h1').textContent = 'DRAW!'
        replayOption();
    }
}

// Game initialization - Validates player symbol inputs & makes game board interactive.
const startGame = () => {
    // Retrieves player symbol choices and converts to upper case characters.
    player1 = prompt("Player 1: Enter your Symbol...").toUpperCase();
    player2 = prompt("Player 2: Enter your Symbol...").toUpperCase();

    // Re-prompts players if symbol is > 1 character, an empty space, or same as another player.
    while (player1.length > 1 || player1 === '' || player1 === ' ' || player1 === player2){
        player1 = prompt("Please enter a SINGLE character for Player 1: ").toUpperCase();
    }
    while (player2.length > 1 || player2 === '' || player2 === ' ' || player1 === player2){
        player2 = prompt("Please enter a SINGLE character for Player 2: ").toUpperCase();
    }
    // Displays player labels
    document.querySelector('#p1').style.display = 'block';
    document.querySelector('#p2').style.display = 'block';

    // Targets player labels, sets player name & symbol, and sets class for styling.
    let p1Label = document.querySelector('#p1');
    p1Label.textContent = `PLAYER 1: ${player1}`;
    p1Label.className = 'isTurn';
    let p2Label = document.querySelector('#p2');
    p2Label.textContent = `PLAYER 2: ${player2}`; 
    p2Label.className = 'waitingTurn';

    // Creates a 2D array for win conditions. Each nested array represents a way in which a player can win.
    winningConditions = [
        ['','',''], ['','',''], ['','',''], // ROWS (0, 1, 2)
        ['','',''], ['','',''], ['','',''], // COLUMNS (3, 4, 5)
        ['','',''], ['','',''] //DIAGONALS (6, 7)
    ]
    // Sets Player 1 as current player (first turn)
    currentPlayer = player1
    
    // BOX 0
    document.querySelector("#row1-col1").addEventListener('click', () => {
        soundPlay.play();
        document.querySelector("#row1-col1").textContent = currentPlayer;
        winningConditions[0][0] = currentPlayer;
        winningConditions[3][0] = currentPlayer;
        winningConditions[6][0] = currentPlayer;
        checkForWin();
        changeTurn();
    }, {once: true});

    // BOX 1
    document.querySelector("#row1-col2").addEventListener('click', () => {
        soundPlay.play();
        document.querySelector("#row1-col2").textContent = currentPlayer;
        winningConditions[0][1] = currentPlayer;
        winningConditions[4][0] = currentPlayer;
        winningConditions
        checkForWin();
        changeTurn();
    }, {once: true});

    // BOX 2
    document.querySelector("#row1-col3").addEventListener('click', () => {
        soundPlay.play();
        document.querySelector("#row1-col3").textContent = currentPlayer;
        winningConditions[0][2] = currentPlayer;
        winningConditions[5][0] = currentPlayer;
        winningConditions[7][2] = currentPlayer;
        checkForWin();
        changeTurn();
    }, {once: true});

    // BOX 3
    document.querySelector("#row2-col1").addEventListener('click', () => {
        soundPlay.play();
        document.querySelector("#row2-col1").textContent = currentPlayer;
        winningConditions[1][0] = currentPlayer;
        winningConditions[3][1] = currentPlayer;
        checkForWin();
        changeTurn();
    }, {once: true});

    // BOX 4
    document.querySelector("#row2-col2").addEventListener('click', () => {
        soundPlay.play();
        document.querySelector("#row2-col2").textContent = currentPlayer;
        winningConditions[1][1] = currentPlayer;
        winningConditions[4][1] = currentPlayer;
        winningConditions[6][1] = currentPlayer;
        winningConditions[7][1] = currentPlayer;
        checkForWin();
        changeTurn();
    }, {once: true});

    // BOX 5
    document.querySelector("#row2-col3").addEventListener('click', () => {
        soundPlay.play();
        document.querySelector("#row2-col3").textContent = currentPlayer;
        winningConditions[1][2] = currentPlayer;
        winningConditions[5][1] = currentPlayer;
        checkForWin();
        changeTurn();
    }, {once: true});

    // BOX 6
    document.querySelector("#row3-col1").addEventListener('click', () => {
        soundPlay.play();
        document.querySelector("#row3-col1").textContent = currentPlayer;
        winningConditions[2][0] = currentPlayer;
        winningConditions[3][2] = currentPlayer;
        winningConditions[7][0] = currentPlayer;
        checkForWin();
        changeTurn();
    }, {once: true});

    // BOX 7
    document.querySelector("#row3-col2").addEventListener('click', () => {
        soundPlay.play();
        document.querySelector("#row3-col2").textContent = currentPlayer;
        winningConditions[2][1] = currentPlayer;
        winningConditions[4][2] = currentPlayer;
        checkForWin();
        changeTurn();
    }, {once: true});

    // BOX 8
    document.querySelector("#row3-col3").addEventListener('click', () => {
        soundPlay.play();
        document.querySelector("#row3-col3").textContent = currentPlayer;
        winningConditions[2][2] = currentPlayer;
        winningConditions[5][2] = currentPlayer;
        winningConditions[6][2] = currentPlayer;
        checkForWin();
        changeTurn();
    }, {once: true});
}