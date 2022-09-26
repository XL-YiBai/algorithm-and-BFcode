Promise.all = function(promises) {
  let ans = []; // 保存结果的数组
  let count = 0; // 记录当前有多少个promise成功了
  return new Promise((resolve, reject) => {
    for (let i=0; i<promises.length; i++) {
      // 如果执行第一个回调得知对象的状态是成功的
      // 每个promise对象都成功  才能调用resolve
      promises[i].then(v => {
        count++;
        ans[i] = v; // promise.all返回的成功的值，是有顺序的，通过下标添加
        // 每一个promise都执行完之后，resolve，把ans数组作为成功的值
        if (count === promises.length) {
          resolve(ans);
        }
      }, r => {
        reject(r); // 只要有一个失败，就返回失败的promise
      })
    }
  })
}
