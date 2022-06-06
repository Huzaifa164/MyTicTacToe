import Game from "./Game.js"

let game = new Game()

const tiles = document.querySelectorAll('.tile')
tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        if(game.updateBoard(tile)){
            for(let i = 0; i < game.board.length; i++){
                if(winnerCombinations && winnerCombinations.includes(i)){
                    tile.classList.add = 'tile-winner'
                }
            }
            removeEventListener
        }
        
    })
})

const btn = document.querySelector('.btn')
btn.addEventListener("click", ()=>{
    game = new Game()
    console.log(game.board)
    tiles.forEach((tile)=>{
        tile.innerHTML = ""
    })
})