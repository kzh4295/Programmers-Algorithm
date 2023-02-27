// 키패드 누르기
// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
	let result;

	const defaultFinger = hand[0].toUpperCase();

	const lastFingerValue = {
		'L': 10,
		'R': 12
	};

	const convertZeroToEleven = (number) => {
		return number === 0 ? 11 : number;
	};

	const isLeftFinger = (number) => {
		return /[147]/.test(number);
	};

	const isRightFinger = (number) => {
		return /[369]/.test(number);
	};

	const nearFinger = (lastLeft, lastRight, number) => {
		const distanceLeft = Math.abs(Math.trunc((lastLeft - number) / 3)) + Math.abs((lastLeft - number) % 3);
		const distanceRight = Math.abs(Math.trunc((lastRight - number) / 3)) + Math.abs((lastRight - number) % 3);

		if (distanceLeft < distanceRight) {
			return 'L';
		}

		if (distanceLeft > distanceRight) {
			return 'R';
		}

		return defaultFinger;
	};

	const numberList = numbers.map(convertZeroToEleven);

	result = numberList.map((number) => {
		if (isLeftFinger(number)) {
			lastFingerValue['L'] = number;

			return 'L';
		}

		if (isRightFinger(number)) {
			lastFingerValue['R'] = number;

			return 'R';
		}

		const finger = nearFinger(lastFingerValue['L'], lastFingerValue['R'], number);

		lastFingerValue[finger] = number;

		return finger;
	});

	return result.join('');
}

const result = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');

console.log(result);
