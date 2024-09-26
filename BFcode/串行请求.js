/**
 * 现在有一组 url，写一个方法串行发请求，返回最终的结果
 * const urls = ['xxx', 'xxx', 'xxx']
 * serialRequest(urls) ---> ['rse1', 'res2', 'res3']
 */

function serialRequest(urls) {
  return new Promise((resolve, reject) => {
    const len = urls.length
    let count = 0 // 请求完成数
    const ans = []

    const request = (url) => {
      fetch(url)
        .then((data) => {
          count++
          // ans.push(data)
          ans.push(`${count} ${data.status}`) // 为了调试验证
          // 还有，就递归继续请求
          if (count < len) {
            request(urls[count])
          } else {
            // 达到数目了就结束
            resolve(ans)
          }
        })
        // 出错了也结束
        .catch((res) => {
          reject(res)
        })
    }

    request(urls[0]) // 启动
  })
}

const urls = [
  'https://api.apiopen.top/getJoke',
  'https://api.apiopen.top/getJoke',
  'https://api.apiopen.top/getJoke',
]
serialRequest(urls).then((data) => console.log(data)) // [ '1 200', '2 200', '3 200' ]
