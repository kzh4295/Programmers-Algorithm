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

    ===================================나라님 코드===========================================
        
                function solution(board, moves) {
    let flushCount = 0;
    let boardSize = board.length;
    
    let basket = moves.reduce((acc,ele,idx)=>{
        for(let i=0; i<boardSize; i++){
            if(board[i][ele-1]) {
                let preItem = acc.pop();
                // 이전 아이템과 비교해서 같지 않으면 둘 다 다시 집어넣기
                // 동일하면 flushCount만 증감.
                if(preItem !== board[i][ele-1]) { 
                    acc.push(preItem);
                    acc.push(board[i][ele-1]);
                }else{
                    flushCount++;
                }
                board[i][ele-1] = 0;
                break;
            }
            else {
                continue;   
            }
            
        }
        return acc;
    },[]);
    
    return flushCount*2;
}
