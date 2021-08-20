//One of something use module
//multiples of something factories

//factory for player
const player = (name, symbol) => {
    return { name, symbol };
}

//module to controller display
const displayController = () => {
    let playerOne = player("me", "X");
    let playerTwo = player("You", "O");
    let currPlayer = playerOne;
    let resultDiv = document.querySelector(".result");
    const symbolDisplay = (div, board) => {
        let num = div.getAttribute("data-value");
        if (board.gameboard[num] != undefined) {
            return;
        }
        board.gameboard[num] = currPlayer.symbol;
        div.innerText = currPlayer.symbol;
        console.log(board.gameboard);
        if (currPlayer == playerOne) {
            currPlayer = playerTwo;
        }
        else {
            currPlayer = playerOne;
        }
    }

    const winnerDisplay = (winner) => {
        resultDiv.innerText = `${winner} wins!!!`;
    }

    const tieDisplay = () => {
        resultDiv.innerText = `It's a tie!`;
    }

    return { symbolDisplay, winnerDisplay, tieDisplay };
};

//gameboard
const gameBoard = (() => {
    let gameboard = [];
    let winningCombo = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];
    let checkWIn = (board) => {
        winningCombo.forEach(el => {
            console.log('hi')
            return 1;
        })
        console.log('bye')
    }
    return { gameboard, checkWIn };
})();

//game 
const game = (() => {
    let board = gameBoard;
    let display = displayController();
    let divs = document.querySelectorAll(".game-board div");
    divs.forEach(div => {
        div.addEventListener("click", () => {
            display.symbolDisplay(div, board);
            // console.log(board.checkWIn(board.gameboard))
            // console.log(board.gameboard)
            console.log(board.checkWIn(board.gameboard))
            // if (board.checkWIn(board.gameboard)) {
            //     display.winnerDisplay();
            // }
        })
    })



})();

let gamer = game;
game;