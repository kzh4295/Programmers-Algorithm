// 문자열을 정수로 바꾸기
// https://school.programmers.co.kr/learn/courses/30/lessons/12925

// 나의 풀이
function solution(s) {
    let answer = 0;
    answer = parseInt(s);
    
    // s는 "0"으로 시작하지 않습니다. =>if문을 걸어 (arr[0] = 0이면 다음 인덱스를 가져와서 리턴하도록)
    return answer;
}

// ================================================================
// 타인의 풀이
function strToInt(str){
  return str/1
  }

// 느낀점
// - parseInt() : 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
// - Number() : 객체이자 생성자로 생성자는 상수와 메서드를 가짐, 숫자 타입으로 변경 가능
// - 사칙연산으로 문자열 타입 변경
