소요시간 => 10:59

function solution(s) {
    let answer = '';
    let len = s.length;
    let divide = len/2
    
    len % 2 === 0 ? answer = s[divide -1] + s[divide] : answer = s[Math.floor(divide)]
    
    return answer;
}

====================================타인의 코드 참고===========================================================
 느낀점 :  유사했다.
  
