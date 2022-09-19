/**
 * "abbaca" -> 删除相邻的bb -> aaca -> 删除相邻的aa -> ca
 *
 * 用栈存取，如果遇到当前遍历的元素和栈顶元素相同，就把栈顶元素出栈(这样相当于就删除了栈顶和当前遍历的元素)；否则把当前遍历元素入栈。
 */

var removeDuplicates = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0) {
      // 当前遍历的元素和栈顶相同
      if (s[i] === stack[stack.length - 1]) {
        stack.pop();
        // 当前遍历元素和栈顶不同，直接入栈
      } else {
        stack.push(s[i]);
      }
      // 如果栈是空的，直接入栈
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};
