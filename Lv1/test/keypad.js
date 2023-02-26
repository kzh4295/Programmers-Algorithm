const ZERO_KEYPAD_INDEX = 11;

const LEFT_HAND_INIT_POSITION = 10;
const RIGHT_HAND_INIT_POSITION = 12;

const SAME_HAND = 'SAME_HAND'
const LEFT_HAND = 'L';
const RIGHT_HAND = 'R';

const 왼손으로누를숫자 = [1, 4, 7];
const 오른손으로누를숫자 = [3, 6, 9];

const getTouchHandByDistance = (number, leftHandPosition, rightHandPosition) => {
  // 거리 체크하는 함수
  // 의도 => 행의 이동 거리 + 열의 이동 거리
  // 행의 이동거리 => leftHandPosition 혹은 rightHandPosition와 매개변수(누른 키패드 값)의 차이에 3을 나눈 몫만큼 이동
  // 열의 이동거리 => leftHandPosition 혹은 rightHandPosition와 매개변수(누른 키패드 값)의 차이에 3을 나눈 나머지만큼 이동

  const leftHandDistance =
    Math.abs(Math.trunc((leftHandPosition - number) / 3)) + Math.abs((leftHandPosition - number) % 3);

  const rightHandDistance =
    Math.abs(Math.trunc((rightHandPosition - number) / 3)) + Math.abs((rightHandPosition - number) % 3);

  if (leftHandDistance === rightHandDistance) return SAME_HAND;
  if (leftHandDistance > rightHandDistance) return RIGHT_HAND;
  if (leftHandDistance < rightHandDistance) return LEFT_HAND;
};

const 배열중숫자0은11로변환 = (array) =>
  array.map((elem) => {
    if (elem === 0) return ZERO_KEYPAD_INDEX;

    return elem;
  });

const getTouchHand = (number) => {
  if (왼손으로누를숫자.includes(number)) return LEFT_HAND;

  return RIGHT_HAND;
};

function solution(numbers, hand) {
  const convertedNumbers = 배열중숫자0은11로변환(numbers);

  let leftHandPosition = LEFT_HAND_INIT_POSITION;
  let rightHandPosition = RIGHT_HAND_INIT_POSITION;

  const touchHandRecord = convertedNumbers.map((number) => {
    switch (number) {
      case 1:
      case 3:
      case 4:
      case 6:
      case 7:
      case 9:
        const touchHand = getTouchHand(number);
        console.log(touchHand);

        if (touchHand === LEFT_HAND) leftHandPosition = number;
        if (touchHand === RIGHT_HAND) rightHandPosition = number;

        return touchHand;

      case ZERO_KEYPAD_INDEX:
      case 2:
      case 5:
      case 8:
        const touchHandByDistance = getTouchHandByDistance(number, leftHandPosition, rightHandPosition);

        
        if (touchHandByDistance === SAME_HAND) {
          const upperCaseHand = hand[0].toUpperCase();

          if (upperCaseHand === LEFT_HAND) leftHandPosition = number;
          if (upperCaseHand === RIGHT_HAND) rightHandPosition = number;

          return upperCaseHand;
        }

        if (touchHandByDistance === LEFT_HAND) {
          leftHandPosition = number;

          return LEFT_HAND;
        }

        if (touchHandByDistance === RIGHT_HAND) {
          rightHandPosition = number;

          return RIGHT_HAND;
        }
    }
  });

  return touchHandRecord.join('');
}

const result = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
console.log(result);
// 기대값:              LRLLRRLLLRR


// =====================================================================

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

