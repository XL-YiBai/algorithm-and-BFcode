/**
 * 题目来源：https://bigfrontend.dev/zh/problem/throttle-Promises
 * 假设你需要调用100个API获取数据，并且需要越快越好。
 * 如果使用Promise.all()，100个请求会同时到达你的服务器，如果你的服务器性能很低的话，这就会是个负担。
 * 请 节流API请求，使得任何时刻最多只有5个请求正在进行中。
 * 你需要实现一个throttlePromises() 函数来达到目的。这个函数接受一个promise生成函数的数组，和一个同一时刻进行中的API请求最大数量。
 */

/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max) {
  // your code here
  return new Promise((resolve, reject) => {
    let doneCount = 0 // 完成的请求数
    let nextIdx = 0 // 下一个Promise请求的下标
    const ans = new Array(funcs.length)

    const doNext = () => {
      // 如果全部执行完了，就resolve
      if (doneCount === funcs.length) {
        resolve(ans)
        return
      }
      if (nextIdx >= funcs.length) return

      // 先记录一下当前执行的Promise下标
      const curIdx = nextIdx
      funcs[curIdx]()
        .then((data) => {
          ans[curIdx] = data
          doneCount++
          // 如果全部执行完了，就resolve
          if (doneCount === funcs.length) {
            resolve(ans)
            return
          }
          // 否则执行完一个，就继续执行后面的
          doNext()
        })
        .catch((res) => {
          // 和 Promise.all 一样，有失败的就直接 reject
          reject(res)
        })

      // 在 doNext 函数内部，同步增加 nextIdx
      nextIdx++
    }

    // 同步并发启动 max 个请求
    for (let i = 0; i < max; i++) {
      doNext()
    }
  })
}
