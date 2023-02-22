## 14. 키패드 누르기

### _문제 풀이_

```js
<!-- My Solution -->
let leftValue = 10; // leftValue 초기값 (* => 10)
let rightValue = 12; // rightValueValue 초기값 (# => 12)

function solution(numbers, hand) {
  let answer = ''; //solution함수를 return 하고자 하는 값

  const elevenNumber = numbers.map((number) => {
    return number || 11;
  }); // 매개변수로 받는 numbers의 요소 중, number가 0인 값을 11로 변환하여 만든 새로운 배열을 return하는 함수

  const checkDistance = (param) => {
    // 거리 체크하는 함수
    // 의도 => 행의 이동 거리 + 열의 이동 거리
    // 행의 이동거리 => leftValue 혹은 rightValue와 매개변수(누른 키패드 값)의 차이에 3을 나눈 몫만큼 이동
    // 열의 이동거리 => leftValue 혹은 rightValue와 매개변수(누른 키패드 값)의 차이에 3을 나눈 나머지만큼 이동

    let distanceLeft = Math.abs(Math.trunc((leftValue - param) / 3)) + Math.abs((leftValue - param) % 3);
    let distanceRight = Math.abs(Math.trunc((rightValue - param) / 3)) + Math.abs((rightValue - param) % 3);

    return distanceLeft - distanceRight; // 양수 : distanceLeft가 머니까 R // 음수 : distanceRight가 머니까 L // 0 : 거리가 같으므로 손잡이에 따름
  };

  const checkHand = (param, index, finger) => {
    // L인지 R인지 확인하는 함수
    if (finger === 'L') {
      elevenNumber[index] = finger;
      leftValue = param;
    } else {
      elevenNumber[index] = finger;
      rightValue = param;
    }
  };

  answer = elevenNumber.map((ele, idx) => {
    switch (ele) {
      case 1:
      case 4:
      case 7:
        checkHand(ele, idx, 'L');
        break;

      case 3:
      case 6:
      case 9:
        checkHand(ele, idx, 'R');
        break;

      case 2:
      case 5:
      case 8:
      case 11:
        checkDistance(ele) === 0
          ? checkHand(ele, idx, hand[0].toUpperCase())
          : checkDistance(ele) > 0
          ? checkHand(ele, idx, 'R')
          : checkHand(ele, idx, 'L');
    }
  });

  answer = elevenNumber.join('');
  return answer;
}
```





```js
<!-- 나라님 풀이 -->
    function solution(numbers, hand) {
    //2,5,8,0 가까운 손 찾기 펑션
    const findHand = (leftHand, rightHand, number) =>{
        const XY = {
            1:[0,0],2:[0,1],3:[0,2],
            4:[1,0],5:[1,1],6:[1,2],
            7:[2,0],8:[2,1],9:[2,2],
            "*":[3,0],0:[3,1],"#":[3,2]
        }
        
        let leftDist = Math.abs(XY[number][0]-XY[leftHand][0]) + Math.abs(XY[number][1]-XY[leftHand][1]);
        let rightDist = Math.abs(XY[number][0]-XY[rightHand][0]) + Math.abs(XY[number][1]-XY[rightHand][1]);
        return leftDist === rightDist? hand.substr(0,1).toUpperCase() : (leftDist > rightDist? 'R':'L');
    };
    
    //손 위치 계산
    let handCalc = numbers.reduce((acc,ele,idx)=>{
        let nowHand = acc.handNumObj[ele]? acc.handNumObj[ele] : findHand(acc.L, acc.R, ele);
        acc[nowHand] = ele;
        acc.handString += nowHand;
        
        return acc;
    },{
        handNumObj : {
            1:'L', 4:'L', 7:'L',
            3:'R', 6:'R', 9:'R',
            2:'',  5:'',  8:'',  0:''
        },
        L : '*',
        R : '#',
        handString : ''
    });
    return handCalc.handString;
}
```
