소요시간 => 04:19

=======================================================

function solution(seoul){
    let answer = '';
    const isKim = (ele) => ele == "Kim";
    
    return `김서방은 ${seoul.findIndex(isKim)}에 있다`;
}

===================타인의 코드 참고===================================

function solution(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}

느낀점 : 
  indexOf vs findIndex의 성능 차이를 알 수 있었다.
  indexOf : 배열에서 원하는 특정 항목이 배열의 몇번째 원소인지 찾아 index를 리턴해주는 함수. (만약에 못찾으면 -1 리턴)
  findIndex : 배열 안에 있는 값이 객체이거나, 특정 값으로 찾는 것이 아니라 특정 조건으로 찾는 거면 indexOf으로 찾을 수 없음.
