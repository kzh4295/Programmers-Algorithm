// [1차] 비밀지도
// https://school.programmers.co.kr/learn/courses/30/lessons/17681

// 나의 코드
function solution(n,arr1, arr2) {
    let answer =[];
    const conversionOne  = arr1.map(ele=>ele.toString(2) * 1);
    const conversionTwo  = arr2.map(ele=>ele.toString(2) * 1);

    for(let i =  0; i < n; i++){
      if((conversionOne[i]  + conversionTwo[i]).length === n){
        answer[i] = (conversionOne[i]  + conversionTwo[i]) + ''
      } else{
        answer[i] = (conversionOne[i]  + conversionTwo[i]+'').padStart(n, '0')
      }
    }
    answer = answer.map((ele)=>{ return ele.replaceAll('0', ' ').replaceAll('1', '#').replaceAll('2', '#')})

    return answer;
}





// 타인의 코드
function solution(n, arr1, arr2) {
    const answer = [];
    for (let i = 0; i < n; i++) {
        const strLine = (arr1[i] | arr2[i]).toString(2)
        console.log(strLine)
        const arrLine = strLine.padStart(n, '0')
        const decLine = arrLine.replaceAll("0", " ").replaceAll("1", "#")
        answer.push(decLine)
    }
    return answer;
}
