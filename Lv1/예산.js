```javascript
<!-- 나의 풀이 -->
function solution(d, budget) {
    let total = 0 // idx만큼 부서가 신청한 금액의 합
    let idx = 0;  // idx번째 부서가 신청
    let tempArr = d.sort((a, b) => a - b) // 오름 차순으로 부서가 신청한 값 변경
    
    while(total <= budget){
        total += tempArr[idx]
        idx++
    }
    return idx-1;
}


```

```javascript
<!-- 타인의 풀이 -->
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}
```
