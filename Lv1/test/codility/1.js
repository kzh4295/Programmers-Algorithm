// 1번 

function solution(S) {
    let answer = 0
    let spelling = [...S].reduce((acc, ele)=>{
        acc[ele] = (acc[ele]||0)+1
        return acc;
    },{})
  
    answer = Object.values(spelling).filter(ele => ele % 2 === 1).length;
  
    return answer; 
  }

//   2번 패스

// 3번
function solution(N) {
    const numberToString = N.toString(); // Convert the number to a string
    
    const maximum = numberToString.split('').reduce((acc, ele, idx) => {
      if (ele === '5') {
        const divide = numberToString.substring(0, idx) + numberToString.substring(idx + 1);
        const stringToNumber = divide * 1; // Convert the modified string to a number
  
        return stringToNumber > acc ? stringToNumber : acc;
      }
      return acc;
    }, -Infinity);
  
    return maximum;
  }

//   4번

// 5번
function mergeWithSort(A, B) {
    function mergeArrays(A, B, tempArray = []) {
      if (A.length === 0) {
        return tempArray.concat(B);
      }
  
      if (B.length === 0) {
        return tempArray.concat(A);
      }
  
      if (A[0] <= B[0]) {
        return mergeArrays(A.slice(1), B, tempArray.concat(A[0]));
      } else {
        return mergeArrays(A, B.slice(1), tempArray.concat(B[0]));
      }
    }
  
    return mergeArrays(A, B);
  }
  

//   6번
function maxSumWithTiles(A) {
    if (A.length <= 2) {
      return 0;
    }
  
    return A.reduce((acc, ele, i) => {
      const sum = (i >= 2 ? acc[i - 2] : 0) + acc[i] + ele;
      acc.push(Math.max(acc[i], sum));
      return acc;
    }, [A[0], A[1]])[A.length - 1];
  }
