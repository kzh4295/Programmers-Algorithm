// 성격 유형 검사하기
// https://school.programmers.co.kr/learn/courses/30/lessons/118666

// 나의 풀이
function solution(survey, choices) {
  let answer = "";

  const obj = choices.reduce(
    (acc, ele, idx) => {
      switch (ele) {
          case 1:
              acc[survey[idx][0]] += 3;
              break;
          case 2:
              acc[survey[idx][0]] += 2;
              break;
          case 3:
              acc[survey[idx][0]] += 1;
              break;
          case 5: case 6: case 7:
              acc[survey[idx][1]] += ele - 4
              break;
      }

      return acc;
    },
    {
      R: 0,
      T: 0,
      C: 0,
      F: 0,
      J: 0,
      M: 0,
      A: 0,
      N: 0
    }
  );

  for (let i = 0; i < 8; i += 2) {
      const leftMbtiScore = Object.entries(obj)[i][1];
      const rightMbtiScore = Object.entries(obj)[i+1][1];
      const leftMbti = Object.entries(obj)[i][0];
      const rightMbti = Object.entries(obj)[i+1][0];
      
    answer +=
      leftMbtiScore < rightMbtiScore
        ? rightMbti
        : leftMbti;
  }

  return answer;
}

