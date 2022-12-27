소요시간 => 19:00

======================================================

function solution(phone_number) {
    let answer = '';
    let len = phone_number.length;
    
    for(let i = 0; i < len-4; i++){
            answer += '*'
    }
    
    answer += phone_number.slice(-4)
    
    return answer;
}

====================타인의 코드 참고==================================

function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

느낀점 :정규식으로 접근하는게 속도가 더 빠르구나..
