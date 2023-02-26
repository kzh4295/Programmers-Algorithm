// 가운데 글자 가져오기
// https://school.programmers.co.kr/learn/courses/30/lessons/12903

// 나의 풀이
function solution(s) {
    let answer = '';
    let len = s.length;
    let divide = len/2
    
    len % 2 === 0 ? answer = s[divide -1] + s[divide] : answer = s[Math.floor(divide)]
    
    return answer;
}

