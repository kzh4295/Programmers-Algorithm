// 나의 풀이
function solution(arr1, arr2) {
    let answer = [];
    for(let i = 0; i< arr1[0].length ; i++){
        if(arr1[0].length === 1){
            answer.push([arr1[0]*1 + arr2[0]*1], [arr1[1]*1 + arr2[1]*1])
        } else answer.push([arr1[i][0]+arr2[i][0], arr1[i][1]+arr2[i][1]])
    }

    return answer;
}

// ===========================================================================

// 타인의 풀이 
function solution(arr1,arr2){
    return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}

// [느낀점]
// 이 방식이 커링 기법인건가...?

// ===========================================================================

// 타인의 풀이
function solution(arr1, arr2) {
    var answer = [[]];
    for (let i=0; i<arr1.length; i++){
        answer[i] =[];
        
        for(let j=0; j<arr1[i].length; j++){
            
            answer[i].push(arr1[i][j] + arr2[i][j]);
       
        }
    }
    return answer;
}



//느낀점
// 행렬의 문제는 굳이 1번 루프 말고 2번 루프를 먼저 생각하고 이중배열의 경우 answer[i] =[]; 이 생각을 잊지 말자!!

