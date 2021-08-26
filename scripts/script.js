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
        if (currPlayer == playerOne) {
            currPlayer = playerTwo;
        }
        else {
            currPlayer = playerOne;
        }
    }

    const winnerDisplay = (winner) => {
        if (playerOne.symbol == winner) {

            resultDiv.innerText = `${playerOne.name} wins!!!`;
        }
        else {
            resultDiv.innerText = `${playerTwo.name} wins!!!`;

        }
    }

    const tieDisplay = () => {
        resultDiv.innerText = `It's a tie!`;
    }

    const eraseDisplay = () => {
        let divs = document.querySelectorAll(".game-board div");
        divs.forEach(div => {
            div.innerText = "";
            currPlayer = playerOne;
        });
        resultDiv.innerText = "";
    }

    return { symbolDisplay, winnerDisplay, tieDisplay, eraseDisplay };
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
    let reset = () => {

    }
    let checkWIn = (board) => {
        let won;
        winningCombo.forEach(el => {
            // console.log('hi');
            if (((board[el[0]] != undefined) || (board[el[1]] != undefined) || (board[el[2]] != undefined)) && (board[el[0]] == board[el[1]]) && (board[el[1]] == board[el[2]])) {
                // dis.winnerDisplay(board[el[0]]);
                won = board[el[0]];
            }

        })
        return won;
    }

    return { gameboard, checkWIn };
})();

//game 
const game = (() => {
    let board = gameBoard;
    let display = displayController();
    let divs = document.querySelectorAll(".game-board div");
    let won = false;
    let reset = document.querySelector(".reset");

    divs.forEach(div => {
        div.addEventListener("click", () => {
            if (!won) {
                display.symbolDisplay(div, board);
            }
            
            won = board.checkWIn(board.gameboard);
            if (won) {
                display.winnerDisplay(won);

            }

            if (board.gameboard.length == 9) {
                if (!board.gameboard.includes(undefined)) {
                    display.tieDisplay();
                }
            }

        })
    })

    reset.addEventListener("click", () => {
        board.gameboard = [];
        display.eraseDisplay();
        won = false;
    })



})();

let gamer = game;
game;