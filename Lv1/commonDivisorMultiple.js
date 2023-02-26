// 최대공약수와 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 나의 풀이
function solution(n, m) {
    let answer = [];
    let nn = [] //n의 공약수를 담을 초기 배열 
    let mm = [] //m의 공약수를 담을 초기 배열

    for(let i = 1; i < n+1 ; i++){
         if(n % i === 0){
             nn.push(i)
         }
    }                            //n의 약수 배열을 nn 변수에 담기

    for(let i = 1; i < m+1 ; i++){
      if(m % i === 0){
         mm.push(i)
        }
    }                              //m의 약수 배열을 mm 변수에 담기


    // mm과 nn 일치하는 요소들로 새로 배열 만들고(공약수) 그 요소 중 제일 큰 수를 answer[0]에 할당(최대 공약수)
    answer[0] = Math.max(...mm.filter((ele)=> nn.includes(ele)))

    // 두 수 의 * / 최대공약수는 최소공배수로 떨어짐
    answer[1] = (n * m)/answer[0]

    return answer;
}

// 최대 공약수 => 공약수를 구함 => 공약수 중 최대를 구함 => 개별 공약수를 구하고, 둘다 해당 되는 것(&&)을 answer[0]
// 1, 3
// 1, 2, 3, 4, 6, 12

// 최소 공배수 => 공배수를 구함 => 공배수 중 최소를 구함 => 공배수 : 공통인 배수 => 개별 공배수를 구하고, 둘다 해당 되는 것(&&)을 answer[1]


// ======================================================================
// 타인의 풀이
function solution(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}

// 느낀점
//  유클리드 호재법 => 두 수의 최대공약수를 구하는 알고리즘
//   r = a % b가 0이 나오면 false가 되어 for문 종료됨
