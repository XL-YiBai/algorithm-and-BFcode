/**
 * 手写Array.map
 */

Array.prototype._map = function (fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i));
  }
  return arr;
};

// 测试
console.log([1, 2]._map((i) => i * 2));
