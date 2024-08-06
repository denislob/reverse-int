module.exports = function reverse (n) {
  let num = ''
  let str_n = String(Math.abs(n))
  let cnt_n = str_n.length - 1
  while (cnt_n >= 0) {
    num += str_n[cnt_n]
    cnt_n--
  }
  return Number(num);
}
