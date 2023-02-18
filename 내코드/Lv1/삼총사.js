소요시간 => 1:38:00
============================================================================

function solution(number) {
    let answer = 0;

    for(let i=0; i<number.length; i++){
        for(let j = i+1; j<number.length; j++){
            for(let k = j+1; k<number.length; k++){
                if(number[i] + number[j] + number[k]===0) {answer++}
            }
        }
    }


    return answer;
}

============================================================================
  느낀점 => 
삼중 for문을 안써보려고 시도했지만, 안쓸경우 되려 더 많은 내장메서드를 돌려야 한다고 판다해서 3중 for문으로 돌린 것은 아쉽다.
그치만 타인의 코드를 보면 직관적이지 않다는 생각이 들어서 되려 만족하는 면도 있다.  




  
