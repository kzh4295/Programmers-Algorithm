function sortByIndex(arr){
    arr.sort((a, b) => a.idxValue - b.idxValue)
}


function solution(strings, n) {
    let answer = [];

    let tempObj = strings.reduce((acc, ele)=>{
        acc.push({
            value : ele,
            idxValue: ele[n]
        })

        return acc;
    },[]) 

   sortByIndex(tempObj)
console.log(tempObj)




   

    return answer;
}


result = solution(["abce", "abcd", "cdx"], 2)

console.log(result)
            // 기댓값  ["abcd","abce","cdx"]