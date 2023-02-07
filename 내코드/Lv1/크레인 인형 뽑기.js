function solution(board, moves){
    let answer = 0;
    const tempArr = Array.from(Array(board.length), () => new Array(board.length)); 
    const lenBoard = board.length;
   
    for(let i = lenBoard; i>0; i--){
        for(let j = 0; j < lenBoard; j++){
            // tempArr[j].push(board[i][j])
              tempArr[j].push(board[lenBoard-j][j])
        }
    }
    
    return tempArr;
