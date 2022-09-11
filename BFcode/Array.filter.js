/**
 * 手写Array.filter
 */

Array.prototype._filter = function (fn) {
  if (typeof fn != "function") return;
  const ans = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i)) {
      ans.push(this[i]);
    }
  }
  return ans;
};

// 测试
console.log([1, 2]._filter((i) => i > 1));
