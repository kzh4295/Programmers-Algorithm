소요시간 => 12:20

function solution(n) {
    let answer = '';
    
    for(let i=0; i<n; i++){
       answer +=  i% 2 ? '박' : '수'}
    
    return answer;
}

=====================타인의 코드 참고===============================
  
 repeat, substr등을 사용하거나 배열을 만들어 배열 메서드를 돌리신 분들이 많지만 굳이 돌리고 싶지 않다.
