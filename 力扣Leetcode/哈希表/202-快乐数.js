/**
 * 思路：用sum记录每一次的求和，保存在set中，最后如果有求出为1的sum值满足题意，
 * 如果出现set中已经有的sum值说明出现循环，返回false
 */

var isHappy = function (n) {
  let num = n; // num保存每轮循环的数
  const set = new Set();
  while (true) {
    let sum = 0;
    while (num >= 1) {
      // 只要不是0，就循环计算各个位的平方，加到sum中
      sum += (num % 10) * (num % 10);
      num = Math.floor(num / 10);
    }
    if (sum === 1) {
      // 最后sum为1就满足题意
      return true;
    }
    if (set.has(sum)) {
      // 如果set中已经有这个sum值，说明出现了循环，返回false
      return false;
    } else {
      // 否则就更新num值作为下次循环的数，以及把当前sum值添加到set中
      set.add(sum);
      num = sum;
    }
  }
};
