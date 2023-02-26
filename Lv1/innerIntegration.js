// 내적
// https://school.programmers.co.kr/learn/courses/30/lessons/70128

// 나의 풀이
function solution(a, b) {
    let answer = 0;
    let len = a.length;
    
   for(let i = 0; i < len; i++){
       answer += a[i] * b[i]
   }
    
    return answer;
}

// ================================================================
// 타인의 풀이
function solution(a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
    return answer;
  }

// ================================================================
// 타인의 풀이
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}


// 느낀점
// reduce로 유사하게 짰는데 undefined가 나온 것은 한줄 함수인데 {}를 사용해서 안나왔다. 
// a의 요소 * b[idx] answer에 할당
// reduce도 index를 인자로 받을 수 있구나..
