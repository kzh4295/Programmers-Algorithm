// 풀이1)
// forEach사용해서 배열 모두 순회
// if문 안에 filter사용해서 나머지가 0인 요소만 리턴해서 요소값을 push
// else는 -1값 push

// function solution(arr, divisor) {
//   var answer = [];
//    let c = (...arr)%divisor
//    let d=[];
//    console.log(c);
//   if(c===0){
//       d=arr
//   }else {
//       d=-1;
//   }

//   function 함수(인자){
//       인자%divisor
//   }
//   const ab= arr.filter(a=>함수(a)===0)
//   console.log(ab);

// 풀이2)
// 삼항 연산자 > filter값이 나머지=0값과 아닌 값을 불리언으로 하여 진위확인하고, 아니면 리턴 -1

TODO: function solution(arr, divisor) {
  var answer = [];
  const ab = arr.filter((a) => a % divisor === 0);

  ab.length > 0 ? answer.push(...ab) : answer.push(-1);

  return answer.sort((a, b) => a - b);
}
