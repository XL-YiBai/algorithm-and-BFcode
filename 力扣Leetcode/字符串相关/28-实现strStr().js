/**
    思路：遍历haystack串，然后以这个位置向后slice截取needle长度，并和needle比较，如果相等说明找到了，返回当前下标i，
    如果遍历完还没找到，return -1
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};
