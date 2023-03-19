function miniMaxSum(arr) {
    // Write your code here
    let answer = [];
    let total = arr.reduce((acc, ele)=>{return acc + ele}, 0)
    console.log(total)
    
    for(let i = 0; i< arr.length; i++){
        answer.push(total - arr[i])
    }
    console.log(Math.min(...answer))
    console.log(Math.max(...answer))


}

let result = miniMaxSum([1, 2, 3, 4, 5])

console.log(result)