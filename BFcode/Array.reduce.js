/**
 * 手写Array.reduce()
 */

Array.prototype._reduce = function (fn) {
  if (typeof fn != "function") return;
  if (this.length == 0) {
    return undefined;
  }
  let pre = this[0]; // 第一个元素作为初始的pre值
  for (let i = 1; i < this.length; i++) {
    pre = fn(pre, this[i], i, this);
  }
  return pre;
};

// 测试
console.log([1, 2, 3]._reduce((left, right) => left + right));
