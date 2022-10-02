/**
 * Promise.allSettled，返回所有Promise的执行结果
 */

Promise.allSettledTest = function (promises) {
  let count = 0;
  let ans = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (v) => {
          ans[i] = { status: "fulfilled", value: v };
          count++;
          if (count == promises.length) {
            resolve(ans);
          }
        },
        (r) => {
          ans[i] = { status: "rejected", reason: r };
          count++;
          if (count == promises.length) {
            resolve(ans);
          }
        }
      );
    }
  });
};

// const p = Promise.allSettledTest([Promise.resolve(1), Promise.reject(2)]);
// p.then((res) => {
//   console.log(res);
// });
