// 思路：去掉左侧空格，判断第一个字符是否是'+'或者'-'，用f变量保存是否是负值，然后从1切割字符串
// 之后遍历，如果处于 '0'和'9'之间，说明是数字，保存到ans中，否则不是数字，直接break
// 然后根据正负，使用Number转换为数字类型，判断是否越界，如果越界，直接返回边界值，否则返回该数值
var myAtoi = function(s) {
  s = s.trimLeft(); // 去掉左侧空格
  let f = false; // 该数是正数还是负数
  const left = - (2 ** 31); // 左侧边界值
  const right = 2 ** 31 - 1; // 右侧边界值
  let ans = '';
  // 如果第一个符号是'-'，说明是负数
  if (s[0] == '-') {
      f = true;
      s = s.slice(1);
    // 如果是'+'则是正数
  } else if (s[0] == '+') {
      s = s.slice(1);
  }
  // 遍历字符串，把数字一次添加到ans中
  for (let i=0; i<s.length; i++) {
      if (s[i] >= '0' && s[i] <= '9'){
          ans += s[i];
      } else {
          break;
      }
  }
  // f判断正负，然后根据是否越界返回不同值
  if (f) {
      ans = -Number(ans);
      return ans < left ? left : ans;
  } else {
      ans =  Number(ans);
      return ans > right ? right : ans;
  }
};