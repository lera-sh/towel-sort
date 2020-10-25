module.exports = function towelSort (matrix) {
  if (matrix == null) {
      return []
  }
  return matrix.reduce((prev, curr, i) => 
    prev.concat(i % 2 === 0 ? curr : curr.reverse()), [])
}
