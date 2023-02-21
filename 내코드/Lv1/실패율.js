function solution(N, stages) {
    let answer = [];
    // let tempArr = [...Array(N+1).keys()].map((ele)=>(ele+1)+'':
    let tempObj={};
    let keyArrayList = [...Array(N).keys()].map((ele)=>ele+1)
    let valArrayList = [...Array(N+1)].fill(0)

    for(let i = 0; i<keyArrayList.length; i++){
        let key = keyArrayList[i];
        tempObj[key] = valArrayList[i]
    }
                                                  
    tempObj = stages.reduce((acc, ele, idx)=>{
        if(acc[idx +1] === ele){
            acc[idx+1] +=1
        } else {
            acc[idx+1] = 1
        }
        return acc
    },{})
    
    return tempObj;
}
