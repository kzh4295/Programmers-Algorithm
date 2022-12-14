function solution(arr) {
    var answer = 0;
    answer = arr.reduce((acc, ele)=>{
       return acc + ele
    },0)
    return answer/arr.length
    ;
}

==================타인의 코드 잘짜셨넹=======================================
function average(array){
    var sum = 0;
  for(var value of array){
    sum += value;
  }
  return sum/array.length;
}
  
==================느낀점=======================================
굳이 배열을 안만들고, for of를 사용해서 하나씩 element를 꺼낼 수 
