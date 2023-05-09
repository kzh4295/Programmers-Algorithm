function solution(pays, infos, target) {
    let answer = 0;

    let matchingObj = infos.reduce((acc, ele, idx)=>{
        if(ele === target){
            acc[pays[idx]] = ele 
        }
        return acc;
    }, {})

    answer = Object.keys(matchingObj).reduce((acc, ele)=>{
        acc += ele/Object.keys(matchingObj).length
        return Math.round(acc);
    }, 0)

    return answer;
}

let result = solution([1000,2000,3000,4000,5000], ["M","F","M","M","F"], "M")

console.log(result)
//기댓값              2666