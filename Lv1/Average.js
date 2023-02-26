// 평균 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944

// 나의풀이
function solution(arr) {
    var answer = 0;
    answer = arr.reduce((acc, ele)=>{
       return acc + ele
    },0)
    return answer/arr.length
    ;
}

// ============================================

// 타인의 풀이
function average(array){
    var sum = 0;
  for(var value of array){
    sum += value;
  }
  return sum/array.length;
}

//느낀점
// - 굳이 배열을 안만들고, for of를 사용해서 하나씩 element를 꺼낼 수 있군!
