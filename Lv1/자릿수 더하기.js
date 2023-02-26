```javascript
<!-- 나의 풀이 -->
function solution(n){
    var answer = 0;
    let arr = (n + '').split('')
    for(let i=0; i<arr.length; i++){
        answer += Number(arr[i])
    }
    
    return answer;
}

```

```javascript
<!-- 타인의 풀이 -->
     function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)

```

#

//느낀점
- Number()는 생성자함수이자 원시 타입을 변환하는 객체
- parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
- reduce를 잘 활용해보자
 
