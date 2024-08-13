/**
 * 和手写 call 一样，也是把函数放到 context 对象中执行，只是处理传参不一样
 */
Function.prototype.myApply = function (context, args) {
  if (context == null) context = globalThis
  if (typeof context !== 'object' && typeof context !== 'function')
    context = new Object(context)

  const fnKey = Symbol()
  context[fnKey] = this
  const res = context[fnKey](...args)
  delete context[fnKey]
  return res
}

function fn(a, b, c) {
  console.log(this, a, b, c)
}
fn.myApply({ x: 100 }, [10, 20, 30])
