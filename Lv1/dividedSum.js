// 약수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12928

 
// 나의 풀이
function solution(n){
    let arr = [];
    for(let i=1; i <=n; i++){
        if(n%i ===0){
            arr.push(i);
        }
    }
    return arr.reduce((acc, ele)=>{ return  acc + ele }, 0);
}


===========================================================
//타인의 풀이
function solution(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    return sum
}

===========================================================
//타인의 풀이
function solution(n) {
    // var answer = 0;
    let result = 0;

    for(let m = 1 ; m <= n ; m++ ){
        if(n%m===0){
           result=result+m 
        }
    }

    return result;
}

// 느낀점
// return 해야할 값이 배열이 아니라 숫자이면 굳이 배열을 생성하지 말고 바로 값을 계산해도 됐었겠구나..
