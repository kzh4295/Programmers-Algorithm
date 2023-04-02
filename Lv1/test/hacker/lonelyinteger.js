function lonelyInteger(a) {
    // Write your code here

    
    let sameCnt = a.reduce((acc, ele, idx)=>{
        console.log(ele)
        acc[ele] = (acc[ele]|| 0)+1;
        return acc;
    },{})

    // console.log(sameCnt)

    let answer = Object.entries(sameCnt).reduce((acc, ele, idx)=>{
        if(ele[1]===1) acc = ele[0]
        return acc
    }, 0)
    
    return answer
}

let result = lonelyInteger([1, 2, 3, 4, 3, 2,1])
console.log(result)