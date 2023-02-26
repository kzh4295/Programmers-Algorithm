// 짝수와 홀수
// https://school.programmers.co.kr/learn/courses/30/lessons/12937


//나의 풀이
function solution(num) {
    var answer = '';
    if(num%2 === 0) answer = "Even"
    else answer ="Odd"
    return answer;
}

// ============================================

// 타인의 풀이
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

// ============================================

// 타인의 풀이
function evenOrOdd(num) {
  var result = '';

  if(num%2==0){
    result = "Even";
  }else if(num == 0){
    result = "0";
  }else{
    result = "Odd";
  }
  return result;
}


//느낀점
  // if-else문이 1세트이면 삼항연산자 사용하는 것이 훨씬 보기 좋다
  // 0은 짝수가 아니다, 음수에 대한 처리를 하지 않았구나 느꼈다
