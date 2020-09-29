
exports.min = function min (arr) {
  if (arr.length === 0) return 0;
  return Math.min(...arr);
}

exports.max = function max (arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr);
}

exports.avg = function avg (arr) {
  if (arr.length === 0) return 0;
  let sum = arr.reduce((prev, next) => prev + next);
  return sum / arr.length;
}
