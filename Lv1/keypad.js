// 키패드 누르기
// https://school.programmers.co.kr/learn/courses/30/lessons/67256

let leftValue = 10; // leftValue 초기값 (* => 10)
let rightValue = 12; // rightValueValue 초기값 (# => 12)

function solution(numbers, hand) {
	// answer 라는 이름보다 result 와 같은 변수 이름이 좋아요.
	let answer = '';

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
		let distanceLeft = Math.abs(Math.trunc((leftValue - param) / 3)) + Math.abs((leftValue - param) % 3);
		let distanceRight = Math.abs(Math.trunc((rightValue - param) / 3)) + Math.abs((rightValue - param) % 3);

		return distanceLeft - distanceRight;
	};

	const checkHand = (param, index, finger) => {
		if (finger === 'L') {
			elevenNumber[index] = finger;
			leftValue = param;
		}
		else {
			elevenNumber[index] = finger;
			rightValue = param;
		}
	};

	// map의 리턴 값이 없어요.
	// answer = 는 필요 없는 코드에요.
	answer = elevenNumber.map((ele, idx) => {
		//switch 문 보다는 if를 써보세요.
		// if(/1|4|7/.test(ele)){
		// 	checkHand(ele, idx, 'L');
		// }

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
