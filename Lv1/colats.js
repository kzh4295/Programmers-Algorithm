// 나의 풀이
function solution(num) {
    let answer = 0;
    
    while(num !==1){
        if(num % 2 === 0){
            num = num / 2
            if(answer < 501){
                answer++
            }else {
                answer = -1
                break
            }
        } else {
            num = num * 3 + 1;
            if(answer < 501){
                answer++
            }else {
                answer = -1
                break
            }
        } 
    }
    return answer;
}

// =================================================

// 타인의 풀이
function solution(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}


//느낀점
// - num !=1 && answer !=500 라는 2개의 조건식이 충족될 때, 루프를 도니까 좀 더 좋은 코드 같다.

// =================================================

function solution(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : solution(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}

//느낀점
// 재귀 함수를 이용해서 풀 수 있구나..
