// 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

// 나의 풀이
function solution(s){
    let answer = true;
    let ss = s.toLowerCase();
    let sss = [...ss];
    let p, y;
    
    p  = sss.filter((ele)=> ele === 'p');
    y = sss.filter((ele)=> ele === 'y');
    answer = p.length == y.length ? true : false;

    return answer;
}

// ================================================================
// 타인의 풀이
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

// ================================================================
// 타인의 풀이
function numPY(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}



// //느낀점
// - 배열을 굳이 쓰지 않고 string의 내장 메서드로 비교가 가능했는데 굳이 배열로 만들고 굳이 루프를 2번 돌린 것 같다.
// - 정규식을 써서 특정 문자를 찾아 비교하는 방법도 깔끔한 것 같다.
