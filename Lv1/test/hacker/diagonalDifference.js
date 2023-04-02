function diagonalDifference(arr) {
    // Write your code here
    let leftTotal = 0;
    let rightTotal = 0;
    let sum = 0;
    let len = arr.length;

    for(let i = 0; i<len; i++){
        leftTotal += arr[i][i]
        rightTotal += arr[i][len-i-1]
    }
    sum = Math.abs(leftTotal - rightTotal);
    return sum;
}

let result = diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])

console.log(result)