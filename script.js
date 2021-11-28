let player1;
let player2;
let winningConditions;
let currentPlayer;

// Triggers Start of Game
document.querySelector('#start-btn').addEventListener('click', () => {
    startGame();
    document.querySelector('#start-btn').remove();
})



// Changes current player turn. Called after a player makes a choice.
const changeTurn = () => {
    if (currentPlayer === player1){
        currentPlayer = player2;
        document.querySelector('#p1').style.background = 'white';
        document.querySelector('#p2').style.background = 'yellow';
    }
    else {
        currentPlayer = player1;
        document.querySelector('#p2').style.background = 'white';
        document.querySelector('#p1').style.background = 'yellow';
    }
}

// Checks for valid win / draw condition to declare the end of a game.
const checkForWin = () => {
    const endGame = arr => arr.every(value => value === arr[0]);
    let findDraw = 0
    winningConditions.forEach(elem => {
        if (endGame(elem) && !elem.includes('')){
            document.querySelector('footer h1').textContent = `${elem[0]} WINS!`
            document.querySelector('main').addEventListener('click', function(event) {
                event.stopImmediatePropagation();
            }, true);
            document.querySelector('#p1').style.display = 'none';
            document.querySelector('#p2').style.display = 'none';
            let replay = document.createElement('button');
            document.querySelector('#menu').appendChild(replay);
            replay.textContent = 'REPLAY';
            replay.id = 'replay-btn';
            // Resets Game
            document.querySelector('#replay-btn').addEventListener('click', () => {
                window.location.reload();
            })
        }
    })
    for (let i = 0; i < winningConditions.length; i++) {
        if (!endGame(winningConditions[i]) && !winningConditions[i].includes('') ) {
            findDraw++;
        }
    }
    if (findDraw === 8) {
        document.querySelector('footer h1').textContent = 'DRAW!'
    }
}

// Game initialization - Validates player symbol inputs & makes game board interactive.
const startGame = () => {
    player1 = prompt("Player 1: Enter your Symbol...").toUpperCase();
    player2 = prompt("Player 2: Enter your Symbol...").toUpperCase();

    while (player1.length > 1 || player1 === '' || player1 === ' ' || player1 === player2){
        player1 = prompt("Please enter a SINGLE character for Player 1: ").toUpperCase();
    }

    while (player2.length > 1 || player2 === '' || player2 === ' ' || player1 === player2){
        player2 = prompt("Please enter a SINGLE character for Player 2: ").toUpperCase();
    }

    let p1Label = document.querySelector('#p1');
    p1Label.textContent = `PLAYER 1: ${player1}`;
    p1Label.style.background = 'yellow';
    let p2Label = document.querySelector('#p2');
    p2Label.textContent = `PLAYER 2: ${player2}`; 

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

}


