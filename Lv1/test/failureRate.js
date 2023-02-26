function solution(N, stages) {
  arrayAlignment = stages.sort();
  
  // keyArr
  let keyArrayList = [...Array(N).keys()].map((ele) => ele + 1);
  const valArr = [];

  //valArr
  for (let i = 0; i < keyArrayList[i]; i++) {
    valArr[i] = arrayAlignment.filter((ele)=> ele === keyArrayList[i]).length
  }

  console.log(valArr)




//   console.log(tempPercent);

  return valArr;
  console.log()
}

const result = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
console.log(result);

