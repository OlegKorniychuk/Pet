'use strict';
const matrix1 = [[5, 2, 3,],
                 [4, 0, 6,],
                 [800, 8, 9,],
                ];


function findDeterminant(matrix) { //returns determinant of the given matrix
  const length = matrix.length;

  let lengthCheck = matrix[0].length;
  for (let i = 0; i < length; i++) {
    if (lengthCheck !== matrix[i].length) {
      const error = 'This is not a matrix!';
      return error;
    } else {
      lengthCheck = matrix[i].length;
    }
  }
  if (lengthCheck !== length) {
    const error = 'This matrix is not square.';
    return error;
  }

  for (let column = 0; column < length - 1; column++) {
    for (let row = length - 1; row > column; row--) {
      const num = matrix[row][column]; //sets a number in the matrix to work with
      if (num !== 0) {
        const k = num / matrix[row-1][column]; //calculates coefficient for multiplicataion
        for (let j = 0; j < length; j++) {
          matrix[row][j] -= matrix[row-1][j] * k;
        }
      }
    }
  }
  //take final matrix value for use in solution of systems of equations
  let determinant = 1;
  for (let i = 0; i < length; i++) {
    determinant *= matrix[i][i];
  }
  return determinant;
};
console.log(findDeterminant(matrix1));