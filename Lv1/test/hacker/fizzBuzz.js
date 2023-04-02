function fizzBuzz(n) {
  let answer = [];
  const tempNumberArray = Array.from({ length: n }, (v, i) => i + 1);
  console.log(tempNumberArray);
  let multiElement = [];
  for (let i = 1; i < tempNumberArray.length - 1; i++) {
    if (n % tempNumberArray[i] === 0) {
      multiElement.push(tempNumberArray[i]);
    }
  }

  let tempArr = tempNumberArray.reduce((acc, ele, idx) => {
    for(let i = 0; i<multiElement.length-1; i++){
        if(ele% multiElement[i] === 0 && ele% multiElement[i+1] === 0){
            acc.push('fizzBuzz')
        }
        else if(ele% multiElement[i] === 0){
            acc.push('fizz')
        } else if(ele% multiElement[i+1] === 0){
            acc.push('buzz')
        }else{
            acc.push(ele)
        }
        
    } 

    return acc;
  }, []);

  console.log(tempArr)
}


const result = fizzBuzz(15);

console.log(result);
// 기댓값 :[1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]
