/**
    如果s是满足题意的，假设如下由ab组成，那么假设是 abab
    那么由两个s组成的str：abababab，在去掉首尾字符之后，中间也能找出s串
    所以就是看去掉首尾字符后，剩下的串中是否还存在s，存在就是满足题意的，否则不满足。
 */
var repeatedSubstringPattern = function (s) {
  return (s + s).slice(1, s.length * 2 - 1).indexOf(s) !== -1;
};
