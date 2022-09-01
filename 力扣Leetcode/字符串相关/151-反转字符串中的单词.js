/**
 * 题目要求只将单词反转，且最终左右两端不能有空格，单词之间最多一个空格，
 * 题目给的字符串，两个单词之间可能有多个空格
 */

/**
  思路一，使用正则匹配空格，然后split分开成数组，再reverse反转合并为字符串
*/
var reverseWords = function (s) {
  // return s.trim().split(/\s+/).reverse().join(' ');
};

/**
  思路二：先去掉两旁空格然后根据空格split分成数组，如果字符串中间有连续空格的话，这个数组中会存在空串的项，
  从后向前遍历数组，如果遍历到空串就continue跳过，否则就push到ansArr数组，就相当于反转了
  最后ansArr.join(' ')输出，就每个单词中间都有空格了，符合题意反转之后没有连续空格和两边空格
*/
var reverseWords = function (s) {
  const sArr = s.trim().split(" ");
  let ansArr = [];
  for (let i = sArr.length - 1; i >= 0; i--) {
    if (sArr[i] === "") continue;
    ansArr.push(sArr[i]);
  }
  return ansArr.join(" ");
};
