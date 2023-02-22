===============================내 코드===================================
function solution(n) {
    let threeToReverse = [...n.toString(3)].reverse().join('')

    return parseInt(threeToReverse, 3);
}
===============================타인의 코드===================================
function solution(n) {
    var answer = 0;
    let res = []

    const run = (num) => {

        if (num < 3) {
            res.push(num)
            return 
        }
        res.push(num % 3)
        return run(Math.floor(num/3))
    }

    run(n)

    return res.map((a,i) => a * 3 **(res.length - 1 - i)).reduce((r,a) => r + a)
}

느낀점 => 내장 메서드 대신 재귀로도 풀 수 있구나 -,-

