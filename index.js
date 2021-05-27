//import the DOM elements here

const tile1x1 = document.getElementById('row1tile1')
const tile1x2 = document.getElementById('row1tile2')
const tile1x3 = document.getElementById('row1tile3')

const tile2x1 = document.getElementById('row2tile1')
const tile2x2 = document.getElementById('row2tile2')
const tile2x3 = document.getElementById('row2tile3')

const tile3x1 = document.getElementById('row3tile1')
const tile3x2 = document.getElementById('row3tile2')
const tile3x3 = document.getElementById('row3tile3')

const tilesArray = [tile1x1, tile1x2, tile1x3, tile2x1, tile2x2, tile2x3, tile3x1, tile3x2, tile3x3]

const turnx = document.getElementById('turnx')
const turno = document.getElementById('turno')
const winnerMessage = document.getElementById('winnermessage')


//define the tiles in JS
tilesArray.forEach(function(tile){
    tile.value = undefined;
})


// this function checks after each round if someone has won. If all tiles have a value other than undefined and there is no winner, the game is tie.
const checkIfWinner = () => {
    //combinations to win

    const winRow1 = tile1x1.value + tile1x2.value + tile1x3.value;
    const winRow2 = tile2x1.value + tile2x2.value + tile2x3.value;
    const winRow3 = tile3x1.value + tile3x2.value + tile3x3.value;

    const winCollumn1 = tile1x1.value + tile2x1.value + tile3x3.value;
    const winCollumn2 = tile1x2.value + tile2x2.value + tile3x2.value;
    const winCollumn3 = tile1x3.value + tile2x3.value + tile3x3.value;

    const winDiagonal1 = tile1x1.value + tile2x2.value + tile3x3.value;
    const winDiagonal2 = tile3x1.value + tile2x2.value + tile1x3.value;
    if (winRow1 === 3 || winRow2 === 3 || winRow3 === 3 || winCollumn1 == 3 || winCollumn2 === 3 || winCollumn3 === 3 || winDiagonal1 === 3 || winDiagonal2 === 3) {
        winnerMessage.innerText = 'Player one is the winner'
    }
    else if (winRow1 === 6 || winRow2 === 6 || winRow3 === 6 || winCollumn1 == 6 || winCollumn2 === 6 || winCollumn3 === 6 || winDiagonal1 === 6 || winDiagonal2 === 6) {
        winnerMessage.innerText = 'Player two is the winner'
    }
    else if ( tile1x1.value !== undefined && tile1x2.value !== undefined && tile1x3.value !== undefined && tile2x1.value !== undefined && tile2x2.value !== undefined && tile2x3.value !== undefined && tile3x1.value !== undefined && tile3x2.value !== undefined && tile3x3.value !== undefined) {
        winnerMessage.innerText = `It's a tie`
    }
}

//This fuction shows which player turn it is
const showPlayerTurn = () => {
    if (playerturn == 0) {
        turnx.style.visibility = 'visible'
        turno.style.visibility = 'hidden'
    }
    else if (playerturn == 1) {
        turnx.style.visibility = 'hidden'
        turno.style.visibility = 'visible'
    }
}

// defines that player 1 starts and shows that in the game
let playerturn = 0; // 0=player 1, 1=player2
showPlayerTurn()

tilesArray.forEach(function (tile) {
    tile.onclick = function () {
        if (tile.value == undefined) {
            if (playerturn == 0) {
                this.innerHTML = '<p>x</p>'
                this.value = 1
                playerturn++
            }
            else if (playerturn == 1) {
                this.innerHTML = '<p>o</p>'
                this.value = 2
                playerturn--
            }
            checkIfWinner()
            showPlayerTurn()
        }
    }
})

