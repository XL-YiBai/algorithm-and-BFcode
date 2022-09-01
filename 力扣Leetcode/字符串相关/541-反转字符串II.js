/**
  题目要求：每k个反转，然后k个不反转
  思路：因为字符串不能直接通过下标交换位置，所以先转换成数组，
  然后反转i到k-1的字符，每次循环都把i += 2*k，遍历下一个区间反转，
  最后把数组再转成字符串输出即可
 */
var reverseStr = function (s, k) {
  const sArr = s.split("");
  let i = 0;
  while (i < s.length) {
    let l = i;
    let r = i + k - 1;
    while (l < r) {
      [sArr[l], sArr[r]] = [sArr[r], sArr[l]]; // 反转左右指针的字符
      l++;
      r--;
    }
    i += 2 * k; // 更新下一次循环的起点
  }
  return sArr.join("");
};
