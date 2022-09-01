/**
 * 题目给的是一个数组，包含很多字符，要求反转
 * 使用L和R双指针，依次向中间靠拢。
 * 这里改变左右两个指针指向的值，可以直接这样[s[l], s[r]] = [s[r], s[l]]，使用解构赋值的语法
 */

var reverseString = function (s) {
  // let L = 0;
  // let R = s.length-1;
  // let temp;
  // while (L < R) {
  //     temp = s[L];
  //     s[L] = s[R];
  //     s[R] = temp;
  //     L++;
  //     R--;
  // }
  // return s;

  let l = -1,
    r = s.length;
  while (++l < --r) [s[l], s[r]] = [s[r], s[l]]; // 解构赋值用的淋漓尽致，使用解构赋值交换两个变量的值
};
