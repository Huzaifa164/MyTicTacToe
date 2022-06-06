export default class Game{
    constructor(){
        console.log("Game initialized.")
        this.turn = "X"
        this.board = new Array(9).fill(null)
    }

    nextTurn(){
        if(this.turn == 'X'){
            this.turn = 'O'
        }else{
            this.turn = 'X'
        }
    }

    updateBoard(tile){
        if(this.endOfGame()){
            return
        }
        this.board[tile.dataset.index] = this.turn
        tile.innerText = this.turn 
        const winnerCombinations = this.findWinnerCombinations()
        if(!winnerCombinations){
            this.nextTurn()
        }else{
            console.log("We got winner")
            
        }      
    }

    findWinnerCombinations(){
        const winnerCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(const combination of winnerCombinations){
            const [a, b, c] = combination
            if(this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]){
                
                return combination
            }
        }
        return null
    }

    endOfGame(){
        let winnerCombinations = this.findWinnerCombinations()
        if(winnerCombinations){

            return true
        }else{
            return false
        }
    }

    

}