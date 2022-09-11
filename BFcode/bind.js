/**
 * 手写bind
 */
// context保存传入需要指向的this，bindArgs保存剩余参数
Function.prototype.myBind = function (context, ...bindArgs) {
  const self = this; // 因为调用时，fn.myBind，所以this指向当前函数本身

  return function (...args) {
    // 拼接参数，因为调用myBind时可能没有传全部参数，后续再调用可能还会传入args中
    const newArgs = bindArgs.concat(args);
    // 在返回的新函数中，执行原来的函数，并改变this为context
    return self.apply(context, newArgs);
  };
};

// 功能测试
function fn(a, b, c) {
  console.log(this, a, b, c);
}
const fn1 = fn.myBind({ x: 100 }, 10);
fn1(20, 30);
