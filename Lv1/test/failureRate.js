function solution(N, stages) {
    let result = [];
    let failMap = new Map();
    let sortedStages = stages.sort((a,b)=>a-b);
    console.log(sortedStages)
    let failPerMap = new Map();

    const keyArrayList = [...Array(N).keys()].map((ele) => ele + 1);
    const valArr=[];

    for (let i = 0; i < keyArrayList.length; i++) {
        valArr[i] = sortedStages.filter((ele) => ele === keyArrayList[i]).length;
        failMap.set(keyArrayList[i] , valArr[i]);
    }

    let userNum = stages.length;

    console.log(failMap)
    for (const [key,val] of failMap) {
        const failPer = val/userNum;
        failPerMap.set(key,failPer);
        userNum -= val;
        if(userNum == 0) userNum=1; 
    }
    console.log('failPer', failPerMap)
    // console.log(1/8, 3/7, 2/4, 1/2, 0/1 )


    for(let i = 1; i<failPerMap.length +1; i++){
        let max = 0;
        if(max < failPerMap.get(i)){
            max = failPerMap.get(i)
            result.push(max)
        } 
        result.push(max)
    }
    


    console.log(result)
    return result;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))

