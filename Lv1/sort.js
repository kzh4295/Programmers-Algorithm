// 정렬
// 문제 사라진 상태

// 내풀이
function solution(array, commands) {
    let answer = 0; 
    let arr = [];
    let brr = [];
    let crr = [];
    let drr = [];
    
    arr = array.slice(commands[0][0] - 1, commands[0][1]).sort()
    drr.push(arr[commands[0][2] - 1])
    
    brr = array.slice(commands[1][0] - 1, commands[1][1]).sort()
    drr.push(brr[commands[1][2] - 1])
    
    crr = array.slice(commands[2][0] - 1, commands[2][1]).sort()
    console.log(crr);
    drr.push(crr[commands[2][2] - 1])

    for(let i = 0; i<3 ; i++){
        
    }
    return drr;
}

// 배열에서 부분만 자르기 subStr, subString을 이용해서 배열 자르기 => 자른 배열을 arr에 담기
// arr.sort()해서 오름차순으로 정렬
// for문을 돌며  ele[2] 값번째의 arr 요소값을 return
