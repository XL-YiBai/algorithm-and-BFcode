/**
 * 有效的括号二刷
 */
var isValid = function (s) {
  // 如果字符串都不是偶数，肯定不是匹配的括号，直接返回false
  if (s.length % 2 == 1) {
    return false;
  }
  const stack = [];
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    // 如果是左括号，入栈
    if (map.has(c)) {
      stack.push(c);
      // 如果是右括号，拿到栈顶的左括号，看是否可以和当前右括号匹配，不匹配直接返回false，匹配，就把栈顶当前左括号弹出
    } else {
      const t = stack[stack.length - 1];
      if (map.get(t) === c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0; // 如果最后匹配完，栈中还有括号，说明有多余的左括号，返回false，否则返回true
};
