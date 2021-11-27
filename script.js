// `START GAME` Selected:
let player1;
let player2;
let winningConditions;
let currentPlayer;

const startGame = () => {
    player1 = prompt("Player 1: Enter your Symbol...");
    player2 = prompt("Player 2: Enter your Symbol...");
    winningConditions = [
        /* [0][1][2]
           [3][4][5]
           [6][7][8] */
        // ROWS
        ['','',''], ['','',''], ['','',''],
        // COLUMNS
        ['','',''], ['','',''], ['','',''],
        //DIAGONALS
        ['','',''], ['','','']
    ]
    currentPlayer = player1
}

document.querySelector('#start-btn').addEventListener('click', () => {
    startGame()
})

const changeTurn = () => {
    if (currentPlayer === player1){
        currentPlayer = player2;
    }
    else {
        currentPlayer = player1;
    }
}

const checkForWin = () => {
    // DO STUFF
}




// BOX 0
document.querySelector("#row1-col1").addEventListener('click', () => {
    document.querySelector("#row1-col1").textContent = currentPlayer;
    winningConditions[0][0] = currentPlayer;
    winningConditions[3][0] = currentPlayer;
    winningConditions[6][0] = currentPlayer;
    checkForWin();
    changeTurn();
}, {once: true});

// BOX 1
document.querySelector("#row1-col2").addEventListener('click', () => {
    document.querySelector("#row1-col2").textContent = currentPlayer;
    winningConditions[0][1] = currentPlayer;
    winningConditions[4][0] = currentPlayer;
    winningConditions
    checkForWin();
    changeTurn();
}, {once: true});

// BOX 2
document.querySelector("#row1-col3").addEventListener('click', () => {
    document.querySelector("#row1-col3").textContent = currentPlayer;
    winningConditions[0][2] = currentPlayer;
    winningConditions[5][0] = currentPlayer;
    winningConditions[7][2] = currentPlayer;
    checkForWin();
    changeTurn();
}, {once: true});

// BOX 3
document.querySelector("#row2-col1").addEventListener('click', () => {
    document.querySelector("#row2-col1").textContent = currentPlayer;
    winningConditions[1][0] = currentPlayer;
    winningConditions[3][1] = currentPlayer;
    winningConditions[5][0] = currentPlayer;
    checkForWin();
    changeTurn();
}, {once: true});

// BOX 4
document.querySelector("#row2-col2").addEventListener('click', () => {
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
    document.querySelector("#row2-col3").textContent = currentPlayer;
    winningConditions[1][2] = currentPlayer;
    winningConditions[5][1] = currentPlayer;
    checkForWin();
    changeTurn();
}, {once: true});

// BOX 6
document.querySelector("#row3-col1").addEventListener('click', () => {
    document.querySelector("#row3-col1").textContent = currentPlayer;
    winningConditions[2][0] = currentPlayer;
    winningConditions[3][2] = currentPlayer;
    winningConditions[7][0] = currentPlayer;
    checkForWin();
    changeTurn();
}, {once: true});

// BOX 7
document.querySelector("#row3-col2").addEventListener('click', () => {
    document.querySelector("#row3-col2").textContent = currentPlayer;
    winningConditions[2][1] = currentPlayer;
    winningConditions[4][2] = currentPlayer;
    checkForWin();
    changeTurn();
}, {once: true});

// BOX 8
document.querySelector("#row3-col3").addEventListener('click', () => {
    document.querySelector("#row3-col3").textContent = currentPlayer;
    winningConditions[2][2] = currentPlayer;
    winningConditions[5][2] = currentPlayer;
    winningConditions[6][2] = currentPlayer;
    checkForWin();
    changeTurn();
}, {once: true});
