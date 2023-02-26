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


    // let max = 0;
    // for(let i = 0; failPerMap.size; i++){
    //     if(failPerMap.get(i)>max){
    //         result.push(failPerMap.get(i));
    //         max = failPerMap[i]
    //     } else if(failPerMap.get(i) === max){
    //         result.push
    //     }
    // }

    console.log(failPerMap)
    for(const [key, value] of failPerMap){
        console.log(Math.max(value));
    }

    // failPerMap.forEach(function(value, key){
    //     console.log(key)
    //     console.log('key:'+ key)
    //     // console.log('value:'+value)
        
    // })

    // const tt = Array.from(failPerMap.entries());
    // console.log(tt)
    // tt.reduce((acc, ele, idx)=>{
    //     console.log(Math.max(tt[0][]))
    //     console.log(Math.max(ele[0]))
    // },[])



    console.log(result)
    return result;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))

