function plusMinus(arr) {
    // Write your code here
    let answer = [];
    let len = arr.length;
    let tempObj = arr.reduce((acc, ele, idx)=>{
        // ele // -4, -3, -9, 0, 4, 1
        // console.log(ele.length)

        if(ele > 0) acc['plus']++
        else if(ele < 0 ) acc['minus']++
        else{acc['zero']++ }

        return acc
    },{'plus':0, 'minus':0, 'zero':0})

    answer.push((tempObj['plus']/len).toFixed(6))
    answer.push((tempObj['minus']/len).toFixed(6))
    answer.push((tempObj['zero']/len).toFixed(6))

    return answer;
}

let result = plusMinus([-4, 3, -9, 0, 4, 1])

console.log(result)