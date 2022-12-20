소요시간 : 09:33

===================================================================

function solution(x, n) {
    var answer = [];
    for(let i= 0; i<n; i++){
        if(i === 0){
            answer[i] = x;
        } else answer[i] = x * (i +1) 
    }
    return answer;
}

=======================타인의 코드 참고============================================

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

=======================타인의 코드 참고============================================

function solution(x, n) {
    return [...Array(n).keys()].map(v => (v + 1) * x);
}
=======================느낀점============================================
Array(3) //[empty × 3]

[...Array(3)] //[undefined, undefined, undefined]

[...Array(n).keys()] //[0, 1, 2, ...(n-1)]
