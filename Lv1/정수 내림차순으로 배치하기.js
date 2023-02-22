function solution(n) {
    let answer = 0;
    let calcDigit = (n + '').split('').sort(function(a, b){
        return b - a;
    })
    answer = parseInt(calcDigit.reduce((acc, ele)=>{return acc += ele}, '' ))
    return answer;
}
============================타인의 코드 참고======================================================

function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}

** 느낀점 :  '12345' => 12345하는 방법으로  + '12345'하면 되겠구나, sort에서 내림차순으로 변경하면 되니 굳이 reverse를 안써도 되겠다.

============================타인의 코드 참고======================================================

function solution(n) {
    var nums =[];
    do{
        nums.push(n%10);             //1의 자리를 먼저 배열에 푸쉬
        n=Math.floor(n/10); 
    } while(n>0)                     // 몫이 있으면 루프를 돌아라 , solution(453)이면 nums = [3, 5, 4]
    return nums.sort((a,b)=>b-a).join('')*1;} 내림차순으로 변경하고 숫자배열을 풀기

** 느낀점 : 숫자열을 만들기 위해 굳이 문자열을 만들고 풀어서 다시 숫자열을 만들지 말고, 1의 자릿수로 풀어서 루프를 돌리는 것도 유용하겠구나.

