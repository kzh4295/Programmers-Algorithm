소요시간 : 20:00

function solution(n) {
    var answer = [];
    answer = (n + '').split('').map((ele)=>parseInt(ele)).reverse();
    return answer;
}

==========================느낀점==================================================
  string을 배열로 처리하는 것은 map, spread연산 등 생각이 났지만 숫자는 배열로 자릿수 파악하는게 시간이 꽤 소모되었다.
  
