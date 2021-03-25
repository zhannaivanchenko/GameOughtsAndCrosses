import { game } from "./game.js";
import { matrix } from "./matrix.js";

class Winner {
    getColumns() {
        let columnsArray = [];
        columnsArray = matrix.getDb().map((el, i)=> el.map((_, j)=> matrix.getDb()[j][i]));
        return columnsArray;
    }
      
    getDiagonals() {
        const size = matrix.getDb().length;  
        const diagonalsArray = [[],[]];
          for (let i=0; i<size; i++) {
            for (let j=0; j<size; j++) {
              if (i === j) { diagonalsArray[0].push(matrix.getDbCell(i, j)); 
              }}
          }
          for (let i= size-1; i>=0; i-- ) {
            for (let j=0; j<size; j++) {
              if ((i + j) === (size - 1)) { diagonalsArray[1].push(matrix.getDbCell(i, j)) ;
            }}
          }
        return diagonalsArray;  
    }   
    
    checkWinner(matrixToCheck) {
            const isCrossWin = matrixToCheck.some(row => row.every(cell => cell === 1));
            const isNoughtWin = matrixToCheck.some(row => row.every(cell => cell === 2));
            if (isCrossWin) { game.gameOver('cross') }
            else if (isNoughtWin) { game.gameOver('nought') };
    }
        
    checkWinnerCombinations() {
          const columns = this.getColumns();
          const diagonals = this.getDiagonals();
          this.checkWinner(matrix.getDb());
          this.checkWinner(columns);
          this.checkWinner(diagonals);
      }   
}  

export const winner = new Winner();