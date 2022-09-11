/**
 * 手写call
 */

Function.prototype.myCall = function (context, ...args) {
  // 如果没有传入context，就指向全局对象
  if (context == null) context = globalThis;
  if (typeof context != "object") context = new Object(context);

  // 为避免覆盖context的键，使用Symbol
  const fnKey = Symbol();
  // this就是是当前要改变this指向执行的函数，把该函数放入context中
  context[fnKey] = this;
  // 该函数是通过context对象调用的，自然执行时this就指向了context
  const res = context[fnKey](...args);
  delete context[fnKey]; // 调用完删除context上的函数，防止污染

  return res;
};

// 功能测试
function fn(a, b, c) {
  console.log(this, a, b, c);
}
fn.myCall({ x: 100 }, 10, 20, 30);
