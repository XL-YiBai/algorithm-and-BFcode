function parse(str) {
  // 小于3个的字符不需要再加点间隔开
  if (str.length <= 3) return str;

  const left = str.slice(0, str.length - 3); // 截取0到倒数第四位
  const right = str.slice(str.length - 3); // 截取最后三位

  // 递归对left处理
  return parse(left) + "." + right;
}

console.log(parse("1111111111111111111")); // 1.111.111.111.111.111.111
