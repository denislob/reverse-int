module.exports = function reverse(n) {
  const str = n.toString();
  let res = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    res += str[i];
  }
  return res.replace('-', '');
};
