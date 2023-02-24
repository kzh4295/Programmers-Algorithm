// 키패드 누르기
// https://school.programmers.co.kr/learn/courses/30/lessons/67256

let leftValue = 10; // leftValue 초기값 (* => 10)
let rightValue = 12; // rightValueValue 초기값 (# => 12)

function solution(numbers, hand) {
	let answer = ''; //solution함수를 return 하고자 하는 값

	const elevenNumber = numbers.map((number) => {
		return number || 11;
	});

	// 함수와 변수를 분리하면 좋아요
	// const convertZeroToEleven = (number) => {
	// 	return number === 0 ? 11 : number;
	// };
	//
	// const numberList = numbers.map(convertZeroToEleven);



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
		}
		else {
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
