// 크레인 인형뽑기 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/64061


// 나의 풀이
function solution(board, moves){
    let answer = 0;
    let lenBoard = board[0].length;
    const tempBoard = [];
    const tempStack =[];
    
    for(let i = 0; i < lenBoard ; i++){ //배열의 행 길이만큼 반복한다 
        const tmp = [];
        board.forEach((row, idx) => {  
            if(row[i] !== 0){
                tmp.push(row[i])
            }                           //배열의 행에서 선택한 0이 아닌 값을 열의 값으로 추출
        });
        tempBoard.push(tmp);            //추출한 값을 저장 =>tempBoard
    }
    
     for(let x of moves){
        if(tempBoard[x-1][0]){                // tempBoard에 인형이 있을 경우
            tempStack.push(tempBoard[x-1][0]) // tempStack에 추가 =>tempStack
            tempBoard[x-1].shift();
        }
    }
    
    for(let i=0; i<tempStack.length; i++){
        if(tempStack[i] === tempStack[i+1]){
            answer += 2;
            tempStack.splice(i,2);
            i=-1;
    }
}
    
    
    return answer;
}


======================================================
// 나라님 풀이
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
