function solution(num) {
  return Array.from({ length: num }, (_, index) => index + 1).reduce((count, current) => {
    const digits = current.toString();
    for (let i = 0; i < digits.length; i++) {
      if (digits[i] === '3' || digits[i] === '6' || digits[i] === '9') {
        return count + 1;
      }
    }
    return count;
  }, 0);
}

// function containsSpecialDigits(num) {
//     const digits = num+'';
//     for (let i = 0; i < digits.length; i++) {
//         if (digits[i] === '3' || digits[i] === '6' || digits[i] === '9') {
//             return true;
//         }
//     }
//     return false;
// }

// function solution(num) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (containsSpecialDigits(i)) {
//             count++;
//         }
//     }
//     return count;
// }

let result = solution(33);

console.log(result);
