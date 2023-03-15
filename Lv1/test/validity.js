// 내코드
function solution(today, terms, privacies) {
    // let answer = [];

    // 연월일을 일로 계산한 값의 합을 계산해주는 함수(method)
    function calcDate(date){
      return (date.slice(0,4)-2000)*12*28 + (date.slice(5,7)*28) + (date.slice(8) *1)
    }

    // 오늘의 today를 계산한 값(computed)
    const calcToday = calcDate(today) 
    
    // 오늘 기준으로 type 별로 개인정보 유효한 기간의 합
    const effectiveToday = terms.reduce((acc, ele)=>{
      acc[ele[0]] = calcToday - (ele[2]*28)
      return acc;
    },{})

    console.log(Object.values(effectiveToday))

    
    
    let tt = privacies.reduce((acc, ele, idx)=>{
      acc[idx+1] = {
        type: ele.at(-1),
        value:calcDate(ele.slice(0, 9))}
      return acc;
    },{})

    console.log(tt)
    console.log(tt[1].type)
    console.log(tt[1].value)

    let answer = [];
    let len = Object.keys(tt).length;
    for(let i = 0; i <= len; i++){

      Object.values(effectiveToday)[j]
      // console.log(tt[i+1]?.value)
      // for(let j = 0; j<Object.keys(effectiveToday).length; j++){
      //   console.log(Object.values(effectiveToday)[j])
      //   if(tt[i+1]?.value > Object.values(effectiveToday)[j]) answer.push(i)
      //   // if((tt[i+1]?.type === Object.keys(effectiveToday)[j]) && (tt[i+1].value > Object.values(effectiveToday)[j])) answer.push(i)
      // }
    }
  

    return answer

}

let result = solution(
    '2020.01.01',
    ['Z 3', 'D 5'],
    ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z']
);

console.log(result);
// 기댓값 : [1, 4, 5]
