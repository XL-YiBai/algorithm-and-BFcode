/**
 * 题目说：可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * 所以可以放心计算
 * 思路：用栈存储数，遇到数就推入栈，
 * 遇到符号就弹出栈顶的两个数，做运算之后再推回栈中即可。
 * 最后栈里剩下的那个数，就是最终表达式的值
 */

var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    // 如果是非数字
    if (isNaN(Number(tokens[i]))) {
      // 弹出栈顶两个值做运算
      const num2 = stack.pop();
      const num1 = stack.pop();
      // 匹配符号，做运算之后，推回栈中
      switch (tokens[i]) {
        case "+":
          stack.push(num1 + num2);
          break;
        case "-":
          stack.push(num1 - num2);
          break;
        case "*":
          stack.push(num1 * num2);
          break;
        case "/":
          stack.push(parseInt(num1 / num2));
      }
      // 如果是数字，就推入栈中
    } else {
      stack.push(Number(tokens[i]));
    }
  }
  return stack[0]; // 最终剩下的数就是表达式的值
};
