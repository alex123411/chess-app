import React from 'react';

interface Cell {
    color: string;
    x: string;
    y: string;
}
  
enum CellColors{
    BLACK = "cell black",
    WHITE = "cell white"
}
  
export class Board {
  
    private board: Cell[][];
    private axcis = ['1', '2', '3', '4', '5', '6', '7', '8'];
    private ordinat = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  
    constructor(){
      this.board =  [];
      for(let x = 0; x < this.axcis.length; x++){
        this.board[x] = [];
        for(let y = 0; y < this.ordinat.length; y++){
          this.board[x][y] =  {color: this.getColor(x,y), x: this.axcis[7-x], y: this.ordinat[y]};
          console.log(this.board[x][y])
        };
      };
    }

    getColor(x: number, y: number) {
      if( x%2 === 0 ){
        if( y%2 === 0 ) return CellColors.BLACK;
        else return CellColors.WHITE;
      } else {
        if( y%2 === 0 ) return CellColors.WHITE;
        else return CellColors.BLACK;
      }
    }

    getBoard(){
        const board = this.board.map((items, index) => {
            return(
                items.map((subItems, sIndex) => {
                    console.log(index,sIndex)
                    return <div className={subItems.color}> {this.board[index][sIndex].x} {this.board[index][sIndex].y}</div>;
                 })
            )
          })
        return board
    }
}