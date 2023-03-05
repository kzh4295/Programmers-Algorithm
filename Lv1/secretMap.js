// [1차] 비밀지도
// https://school.programmers.co.kr/learn/courses/30/lessons/17681


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
