//One of something use module
//multiples of something factories

//factory for player
const player = (name, symbol) => {
    return {name, symbol};
}

//module to controller display
const displayController = () => {
    let board = gameBoard;
    let resultDiv = document.querySelector(".result");
    const symbolDisplay = (symbol, div) => {
        div.innerText = symbol;
        let num = div.getAttribute("data-value");
        board.gameboard[num] = symbol;
        console.log(board.gameboard);
    }

    const winnerDisplay = (winner) => {
        resultDiv.innerText = `${winner} wins!!!`;
    }

    const tieDisplay = () => {
        resultDiv.innerText = `It's a tie!`;
    }

    return {symbolDisplay, winnerDisplay, tieDisplay};
};

//gameboard
const gameBoard = (() => {
    let gameboard = [];

    return {gameboard};
})();

//game 
const game = (() => {
    let playerOne = player("me", "X");
    let playerTwo = player("You", "O");
    let currPlayer = playerOne;
    let display = displayController();
    let divs = document.querySelectorAll(".game-board div");
    divs.forEach(div => {
        div.addEventListener("click", () => {
            display.symbolDisplay(currPlayer.symbol, div);
            if(currPlayer == playerOne){
                currPlayer = playerTwo;
            }
            else {
                currPlayer = playerOne;
            }
        })
    })

})();

let gamer = game;
game;