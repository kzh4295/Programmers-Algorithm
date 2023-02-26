// 수박수박수박수박수박수?
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

// 나의풀이
function solution(n) {
    let answer = '';
    
    for(let i=0; i<n; i++){
       answer +=  i% 2 ? '박' : '수'}
    
    return answer;
}


// 느낀점  
//  repeat, substr등을 사용하거나 배열을 만들어 배열 메서드를 돌리신 분들이 많지만 굳이 돌리고 싶지 않다.
