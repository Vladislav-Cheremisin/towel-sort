
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let resultArr = [];
    if (matrix === undefined){return []}
    for (let i = 0; i < matrix.length; i++) {
      if ((i + 1) % 2 === 0) {
        matrix[i].reverse().forEach((element) => resultArr.push(element));
      } else {
        matrix[i].forEach((element) => resultArr.push(element));
      }
    }
    return resultArr;
  }
