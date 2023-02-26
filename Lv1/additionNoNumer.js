// 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
    let answer;
    answer = 45 - numbers.reduce((acc, ele)=> acc +=ele, 0)
    return answer;
}

// ================================================================
// 타인의 풀이
function solution(numbers) {
    let answer = 0;

    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i;
    }

    return answer;
}


// 느낀점
 // inclueds를 사용하여 반복문으로도 쓸 수 있겠구나.. 그치만 배열의 길이가 길어지면 오히려 이 코드가 유용하겠구나..

