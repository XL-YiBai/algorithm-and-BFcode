/**
 * 题目来源：BFE.dev 64题（https://bigfrontend.dev/zh/problem/retry-promise-on-rejection）
 * 开发Web App的时候，调取API是再常见不过的事情了。
 * 不过因为网络问题API可能会失败。通常情况下我们可以提示错误，然后让用户重试。
 * 另外一种方案是 遇到网络问题时自动重试。
 * 请实现一个fetchWithAutoRetry(fetcher, count)，当出错的时候会自动重试，直到最大的重试次数。
 * 该问题中，你不需要判断错误是否是网络错误，所有rejection都认为网络错误即可。
 */

/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  // your code here
  return new Promise((resolve, reject) => {
    let count = 0 // 重试的次数
    const run = () => {
      fetcher()
        .then((data) => {
          resolve(data) // 如果成功，直接 resolve(data)
        })
        .catch((error) => {
          // 如果失败，没达到重试次数时，递归调用 run，如果达到了重试次数，reject(error)
          if (count < maximumRetryCount) {
            count++
            run()
          } else {
            reject(error)
          }
        })
    }
    run()
  })
}
