// 문자열 내림차순으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12917

// 나의 풀이
function solution(s) {
  return s.split('').sort().reverse().join('');
}

// 느낀점
// string메서드와 배열 메서드가 혼란스러웠고, 굳이 정규식까지 안써도 되는데 어렵게 접근한 것 같다. 
