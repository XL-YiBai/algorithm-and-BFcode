/**
  在事件循环机制中，异步任务会进入任务队列中执行。像setTimeOut和setInterval这种异步代码，会将里面的回调函数放入WebAPI提供的单独运行空间中，等待延迟时间以后放入任务队列。
  不同的是，setTimeOut延迟时间以后直接放入任务队列中，而setInterval会检查任务队列中是否有上次未执行的异步任务，如果没有才会进入任务队列中。
  这就导致如果setInterval上次的任务因为其他任务的执行仍在任务队列中，就会导致setInterval没有按照期待的时间间隔执行。
 */

function interval(fn, delay) {
  let timer = null
  function func() {
    fn.call(globalThis)
    timer = setTimeout(func, delay)
  }
  timer = setTimeout(func, delay)

  // 导出一个用于取消定时器的方法
  return {
    cancel() {
      clearTimeout(timer)
      timer = null
    },
  }
}

const { cancel } = interval(() => console.log('@@@'), 1000)

setTimeout(() => {
  cancel()
}, 10000)
