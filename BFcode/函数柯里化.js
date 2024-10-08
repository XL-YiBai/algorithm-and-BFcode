const curry = function (fn) {
  fnLen = fn.length // 传入的函数接受参数的个数
  let args = [] // 使用闭包，保存每次函数传入的参数

  function calc(...newArgs) {
    args = [...args, ...newArgs] // 把新的参数保存到args中
    // 如果参数已经接收完毕，就返回函数fn的执行结果
    if (args.length >= fnLen) {
      // return fn(...args)
      return fn.apply(this, [...args])
    } else {
      //否则继续返回当前函数
      return calc
    }
  }

  return calc()
}

// 功能测试
function add(a, b, c) {
  // console.log(this); // window
  return a + b + c
}

const curryAdd = curry(add)
const res = curryAdd(10)(20)(30) // 60
console.log(res)

// 2. 完善版，上面不支持下面的测试用例
function curry2(fn) {
  // your code here
  return function exec(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return (...newArgs) => exec(...args, ...newArgs)
    }
  }
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)(1, 2)
console.log(curriedJoin(3)) // 1_2_3
console.log(curriedJoin(4)) // 1_2_4
