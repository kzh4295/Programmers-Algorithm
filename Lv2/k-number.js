function solution(n, k) {
    // n을 k진수로 변환하고 0을 기준으로 갈른 값을 배열로 구함
    console.log(n.toString(k))
    const numbers = n.toString(k).split('0')
    console.log(numbers)
    const isPrime = (num) => {
        // 공백이거나 숫자 1일 경우 false
        if(!num || num===1) return false;
        // 소수가 아닐 경우 false
        for(let i = 2; i<= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        // 소수일 경우 true
        return true;
    }
    // numbers의 현재 값이 true이면 +1씩 연산 
    return numbers.reduce((acc,cur) => acc + (isPrime(+cur) ? 1 : 0),0)
}

// let result = solution(437674, 3)

// console.log(result)
// // 기댓값            3

let result = solution(110011, 10)

console.log(result)
// 기댓값            2