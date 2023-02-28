// 실패율
// https://school.programmers.co.kr/learn/courses/30/lessons/42889


// 나의 풀이
function solution(N, stages) {
  const result = [];

  const failPeople = {};
  const failPercent = {};
  const sortedStages = stages.sort((a,b)=> a-b); 

  const keyArray = Array.from({length:N}, (v,i)=>i+1); 
  const valueArray = [];

  for (let i = 0; i < keyArray.length; i++) {
      valueArray[i] = sortedStages.filter((ele) => ele === keyArray[i]).length;
      failPeople[keyArray[i]] = valueArray[i]
  } 

  let userNum = stages.length;
  for (const [key, value] of Object.entries(failPeople)) {
      const failPer = value/userNum;
      failPercent[key] = failPer;
      userNum -= value;
      if(userNum == 0) userNum=1; 
  }

  const sortedFailPercent = Object.entries(failPercent).sort((a, b) => b[1] - a[1]);

  for(const ele of sortedFailPercent) {
	  result.push(ele[0] * 1)
  }
  return result;
}
