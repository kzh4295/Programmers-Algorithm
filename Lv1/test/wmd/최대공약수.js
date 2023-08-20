// 2개의 숫자를 받아 최대공약수를 구하는 함수
function gcd(a, b) {
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 배열 내의 숫자들의 최대 공약수를 구하는 함수
function solution(arr) {
  let result = arr[0];
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    result = gcd(result, arr[i]);
  }
  return result;
}

let result = solution([10, 20, 15, 30]);

console.log(result);
