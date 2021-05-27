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

const turnx = document.getElementById('turnx')
const turno = document.getElementById('turno')
const winnerMessage = document.getElementById('winnermessage')

const tilesArray = [tile1x1, tile1x2, tile1x3, tile2x1, tile2x2, tile2x3, tile3x1, tile3x2, tile3x3]

//define the tiles in JS
let t1x1 = undefined;
let t1x2 = undefined;
let t1x3 = undefined;

let t2x1 = undefined;
let t2x2 = undefined;
let t2x3 = undefined;

let t3x1 = undefined;
let t3x2 = undefined;
let t3x3 = undefined;

const tArray = [t1x1, t1x2, t1x3, t2x1, t2x2, t2x3, t3x1, t3x2, t3x3]

// this function checks after each round if someone has won. If all tiles have a value other than undefined and there is no winner, the game is tie.
const checkIfWinner = () => {
    //combinations to win

    const winRow1 = t1x1 + t1x2 + t1x3;
    const winRow2 = t2x1 + t2x2 + t2x3;
    const winRow3 = t3x1 + t3x2 + t3x3;

    const winCollumn1 = t1x1 + t2x1 + t3x1;
    const winCollumn2 = t1x2 + t2x2 + t3x2;
    const winCollumn3 = t1x3 + t2x3 + t3x3;

    const winDiagonal1 = t1x1 + t2x2 + t3x3;
    const winDiagonal2 = t3x1 + t2x2 + t1x3;
    if (winRow1 === 3 || winRow2 === 3 || winRow3 === 3 || winCollumn1 == 3 || winCollumn2 === 3 || winCollumn3 === 3 || winDiagonal1 === 3 || winDiagonal2 === 3) {
        winnerMessage.innerText = 'Player one is the winner'
    }
    else if (winRow1 === 6 || winRow2 === 6 || winRow3 === 6 || winCollumn1 == 6 || winCollumn2 === 6 || winCollumn3 === 6 || winDiagonal1 === 6 || winDiagonal2 === 6) {
        winnerMessage.innerText = 'Player two is the winner'
    }
    else if ( t1x1 !== undefined && t1x2 !== undefined && t1x3 !== undefined && t2x1 !== undefined && t2x2 !== undefined && t2x3 !== undefined && t3x1 !== undefined && t3x2 !== undefined && t3x3 !== undefined) {
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

const tiles = document.querySelectorAll('.tile')

tiles.forEach(function(tile){
    tile.onclick = function () {
        if (t1x1 == undefined) {
            if (playerturn == 0) {
                this.innerHTML = '<p>x</p>'
                t1x1 = 1
                playerturn++
            }
            else if (playerturn == 1) {
                this.innerHTML = '<p>o</p>'
                t1x1 = 2
                playerturn--
            }
            checkIfWinner()
            showPlayerTurn()
        }
    }
})

// defines that player 1 starts and shows that in the game
let playerturn = 0; // 0=player 1, 1=player2
showPlayerTurn()

// tile1x1.onclick = function () {
//     if (t1x1 == undefined) {
//         if (playerturn == 0) {
//             this.innerHTML = '<p>x</p>'
//             t1x1 = 1
//             playerturn++
//         }
//         else if (playerturn == 1) {
//             this.innerHTML = '<p>o</p>'
//             t1x1 = 2
//             playerturn--
//         }
//         checkIfWinner()
//         showPlayerTurn()
//     }
// }

// tile1x2.onclick = function () {
//     if (t1x2 == undefined) {
//         if (playerturn == 0) {
//             this.innerHTML = '<p>x</p>'
//             t1x2 = 1
//             playerturn++
//         }
//         else if (playerturn == 1) {
//             this.innerHTML = '<p>o</p>'
//             t1x2 = 2
//             playerturn--
//         }
//         checkIfWinner()
//         showPlayerTurn()
//     }
// }
// tile1x3.onclick = function () {
//     if (t1x3 == undefined) {
//         if (playerturn == 0) {
//             this.innerHTML = '<p>x</p>'
//             t1x3 = 1
//             playerturn++
//         }
//         else if (playerturn == 1) {
//             this.innerHTML = '<p>o</p>'
//             t1x3 = 2
//             playerturn--
//         }
//         checkIfWinner()
//         showPlayerTurn()
//     }
// }
// tile2x1.onclick = function () {
//     if (t2x1 == undefined) {
//         if (playerturn == 0) {
//             this.innerHTML = '<p>x</p>'
//             t2x1 = 1
//             playerturn++
//         }
//         else if (playerturn == 1) {
//             this.innerHTML = '<p>o</p>'
//             t2x1 = 2
//             playerturn--
//         }
//         checkIfWinner()
//         showPlayerTurn()
//     }
// }
// tile2x2.onclick = function () {
//     if (t2x2 == undefined) {
//         if (playerturn == 0) {
//             this.innerHTML = '<p>x</p>'
//             t2x2 = 1
//             playerturn++
//         }
//         else if (playerturn == 1) {
//             this.innerHTML = '<p>o</p>'
//             t2x2 = 2
//             playerturn--
//         }
//         checkIfWinner()
//         showPlayerTurn()
//     }
// }
// tile2x3.onclick = function () {
//     if (t2x3 == undefined) {
//         if (playerturn == 0) {
//             this.innerHTML = '<p>x</p>'
//             t2x3 = 1
//             playerturn++
//         }
//         else if (playerturn == 1) {
//             this.innerHTML = '<p>o</p>'
//             t2x3 = 2
//             playerturn--
//         }
//         checkIfWinner()
//         showPlayerTurn()
//     }
// }
// tile3x1.onclick = function () {
//     if (t3x1 == undefined) {
//         if (playerturn == 0) {
//             this.innerHTML = '<p>x</p>'
//             t3x1 = 1
//             playerturn++
//         }
//         else if (playerturn == 1) {
//             this.innerHTML = '<p>o</p>'
//             t3x1 = 2
//             playerturn--
//         }
//         checkIfWinner()
//         showPlayerTurn()
//     }
// }
// tile3x2.onclick = function () {
//     if (t3x2 == undefined) {
//         if (playerturn == 0) {
//             this.innerHTML = '<p>x</p>'
//             t3x2 = 1
//             playerturn++
//         }
//         else if (playerturn == 1) {
//             this.innerHTML = '<p>o</p>'
//             t3x2 = 2
//             playerturn--
//         }
//         checkIfWinner()
//         showPlayerTurn()
//     }
// }
// tile3x3.onclick = function () {
//     if (t3x3 == undefined) {
//         if (playerturn == 0) {
//             this.innerHTML = '<p>x</p>'
//             t3x3 = 1
//             playerturn++
//         }
//         else if (playerturn == 1) {
//             this.innerHTML = '<p>o</p>'
//             t3x3 = 2
//             playerturn--
//         }
//         checkIfWinner()
//         showPlayerTurn()
//     }
// }


