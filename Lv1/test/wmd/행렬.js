function solution(matrix) {
  const len = matrix.length;
  const result = Array.from({ length: len }, () => Array(len));

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let rowSum = 0;
      let colSum = 0;

      for (let k = 0; k < len; k++) {
        rowSum += matrix[i][k];
        colSum += matrix[k][j];
      }

      result[i][j] = rowSum + colSum - matrix[i][j];
    }
  }

  return result;
}
