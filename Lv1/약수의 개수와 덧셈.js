```javascript
<!-- 나의 풀이 -->
function factorial(n){
    let temp =[]
    for(let i = 1; i<=n; i++){
        if(n % i ===0){
            temp.push(i)
        }
    }
    return temp;                                 // n의 약수 구하기
}

function solution(left, right) {
    let answer = 0;
    const totalArr = [];                         

    for(let i=left; i<=right; i++){
        totalArr.push(factorial(i))               // left와 right 사이에 해당하는 약수의 이차원 배열로 담기   
    }

    for(let i = 0; i<totalArr.length; i++){
        if(totalArr[i].length % 2 === 0){         // 약수의 개수가 짝수면 해당값을 더하고
            answer += totalArr[i].at(-1)
        } else{
            answer -= totalArr[i].at(-1)          // 약수의 개수가 홀수면 해당값을 뺀다.
        }
    }
    return answer;
}  

```

```javascript
<!-- 타인의 풀이 -->
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

```

#

//느낀점
제곱근이 정수면 약수의 개수가 홀수다!!!!!!!!!!

```javascript
<!-- 타인의 풀이 -->
function getDivisorCount(number) {
  if (number === 1) {
    return 1;
  }

  let count = 2;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  return count;
}

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    const summand = getDivisorCount(i) % 2 === 0 ? i : -i;

    result += summand;
  }

  return result;
}

```

#

//느낀점
메모이제이션 기법 
- 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술





