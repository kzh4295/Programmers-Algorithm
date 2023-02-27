// 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

//나의 풀이
function solution(arr){
    let answer = [];
    answer.push(arr[0])
    now = arr[0]
    
    for(let i = 1 ; i < arr.length; i++){
        // console.log('now = ', now, 'answer = ', answer )
       if(arr[i] !== now){
           now = arr[i]
           answer.push(now)
       }
    }
    return answer;
}

// ================================================
// 타인의 풀이
function solution(arr){
    return arr.filter((ele, idx)=>{
        return ele !== arr[idx+1]
    })
}


// 느낀점
// for문 말고 이런식으로 접근 할 수도 있구낭! 다음에 써먹어 봐야징!!
