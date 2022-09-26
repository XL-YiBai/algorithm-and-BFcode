Promise.race = function(promises) {
  return new Promise((resolve, reject) => {
    for (let i=0; i<promises.length; i++) {
      promises[i].then(v => {
        resolve(v); // 第一个成功的值，返回成功的promise
      }, r => {
        reject(r); // 第一个失败的值，就返回失败的promise
      })
    }
  })
}