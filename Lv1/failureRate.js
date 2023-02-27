// 실패율
// https://school.programmers.co.kr/learn/courses/30/lessons/42889


// 나의 풀이
function solution(N, stages) {
  let result = [];
  let failMap = {};
  let failPerMap = {};
  let sortedStages = stages.sort((a,b)=>a-b);

  const keyArrayList = [...Array(N).keys()].map((ele) => ele + 1);
  const valArr=[];

  for (let i = 0; i < keyArrayList.length; i++) {
      valArr[i] = sortedStages.filter((ele) => ele === keyArrayList[i]).length;
      failMap[keyArrayList[i]] = valArr[i]
  }

  let userNum = stages.length;
  for (const [key, val] of Object.entries(failMap)) {
      const failPer = val/userNum;
      failPerMap[key] = failPer;
      userNum -= val;
      if(userNum == 0) userNum=1; 
  }

  let sorted = Object.entries(failPerMap).sort((a, b) => b[1] - a[1]);

  for(let ele of sorted) {
	  result.push(ele[0])
  }

  Object.entries(failPerMap).reduce((acc, ele, idx)=>{
    return acc;
  },{})



  return result.map((ele)=>ele *1)
}
