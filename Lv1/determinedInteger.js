// 정수 제곱근 판별
// https://school.programmers.co.kr/learn/courses/30/lessons/12934

// 나의 풀이
function solution(n) {
    let answer = -1;
    for(let i=0; i<n+1; i++){
        if(i * i === n) return answer = (i + 1) * (i + 1)  ;
    }
    // 1 * 1 = 1
    // 2 * 2 = 4 (3) 
    // 3 * 3 = 9 (5)
    // 4 * 4 = 16 (7)
    // 5 * 5 = 25 (9)
    // 6 * 6 = 36 (11)
    // 7 * 7 = 49 (13)
    // 8 * 8 = 64 (15)
    
    
    return answer;
}

// ================================================================
// 타인의 풀이
  function nextSqaure(n){
  //함수를 완성하세요
  switch(n % Math.sqrt(n)){
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return "no"
  }
}

//느낀점
//  Math.sqrt, Math.trunc 내장 함수를 사용하면 보다 유용했겠다 생각이 들었고, 
//  switch문을 이용하면 케이스 정리가 더 쉬웠겠다.
