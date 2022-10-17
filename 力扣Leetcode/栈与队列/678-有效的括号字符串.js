/**
 * left保存左括号下标
 * star保存星号下标
 *
 * 先遍历一遍，遇到左括号把下标入栈left，遇到星号下标入栈star
 * 如果遇到右括号，就要弹出左括号匹配，，如果没有左括号，就用星号来匹配。如果两者都没，直接return false
 *
 * 遍历完之后，将剩下的左括号和星号匹配。如果左括号数量比星号多，直接return false，无法匹配。
 * 然后依次弹出左括号和星号，，只有左括号下标小于星号下标才能匹配，否则return false；
 * 这样最终会清空左括号，剩下的星号可以转成空字符。
 */

var checkValidString = function (s) {
  const left = []; // 保存左括号下标，注意是下标
  const star = []; // 保存星号下标

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      left.push(i); // 左括号下标入栈left
    } else if (s[i] == "*") {
      star.push(i); // 星号下标入栈star
    } else {
      // 如果是右括号，就和左括号匹配，
      if (left.length) {
        left.pop();
      } else if (star.length) {
        // 如果没有左括号，就用星号匹配
        star.pop();
      } else {
        // 如果两者都没了，不能匹配，就return false
        return false;
      }
    }
  }

  // 最终如果剩下的左括号比星号还多，那剩下的就不能匹配成功。return false
  if (left.length > star.length) return false;

  // 接着依次取出左括号和星号匹配，把星号当右括号。
  while (left.length && star.length) {
    // 但前提是左括号的下标，要小于星号的下标才能匹配，比如 *( ，就不能匹配。
    // 所以如果左括号在星号右边，也是直接return false;
    if (left.pop() > star.pop()) return false;
  }

  // 结束while循环之后，只可能星号有剩余了，可以都转成空字符就行。所以这里可以直接return true了

  return true;
};
