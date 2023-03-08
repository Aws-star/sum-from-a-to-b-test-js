
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
    let sumAll = 0;
  for (let i = fromN; i <= toN; i ++) {
    sumAll += i;
  }
  return sumAll;
}

module.exports = sum;
