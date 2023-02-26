// 나의 풀이
function solution(arr, divisor) {
    let answer = [];
    const ab = arr.filter((a) => a % divisor === 0);

  ab.length > 0 ? answer.push(...ab) : answer.push(-1);

  return answer.sort((a, b) => a - b);}


