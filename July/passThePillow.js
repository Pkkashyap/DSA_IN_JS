/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let nn = n - 1;

  let q = Math.floor(time / nn);
  let rem = time % nn;

  if (q % 2 == 0) {
    return rem + 1;
  }
  return n - rem;
};

console.log(passThePillow(3, 2));
