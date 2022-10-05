const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(exectuor) {
    this.status = PENDING;
    this.result = null;
    // 如果.then的时候还是pendding，就把回调保存起来，在resolve和reject里面触发回调
    this.callbacks = [];
    const self = this;

    function resolve(data) {
      if (self.data !== PENDING) {
        return;
      }
      self.status = FULFILLED;
      self.result = data;
      // 触发.then中的回调
      setTimeout(() => {
        self.callbacks.forEach((item) => {
          item.onResolved(data);
        });
      });
    }

    function reject(data) {
      if (self.data !== PENDING) {
        return;
      }
      self.status = REJECTED;
      self.result = data;
      // 触发.then中的回调
      setTimeout(() => {
        self.callbacks.forEach((item) => {
          item.onRejected(data);
        });
      });
    }
    // 在构造函数中同步调用exectuor执行器函数
    try {
      exectuor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onResolved, onRejected) {
    const self = this;
    // .then接受的参数必须是函数
    if (typeof onResolved !== "function") {
      onResolved = (value) => value;
    }
    if (typeof onRejected !== "function") {
      onRejected = (reason) => {
        throw reason;
      };
    }

    return new MyPromise((resolve, reject) => {
      // .then中成果或者失败的回调传入cb参数中
      function callback(cb) {
        try {
          // 把Promise的结果传入并执行回调，拿到返回结果
          const result = cb(self.result);
          // 如果返回结果是Promise，那么.then返回的Promise和这个一致
          if (result instanceof MyPromise) {
            result.then(
              (v) => {
                resolve(v);
              },
              (r) => {
                reject(r);
              }
            );
          } else {
            // 如果返回结果不是Promise，那么.then返回成功的Promise，值为结果值
            resolve(result);
          }
        } catch (error) {
          // 如果回调执行报错，就返回失败的Promise
          resolve(error);
        }
      }

      // 下面判断状态，如果是fulfilled/rejected就setTimeout中调用成功失败的回调
      // 如果是pending就把成功/失败的回调保存起来

      // 成功
      if (this.status == FULFILLED) {
        setTimeout(() => {
          callback(onResolved);
        });
      }
      // 失败
      if (this.status == REJECTED) {
        setTimeout(() => {
          callback(onRejected);
        });
      }
      // 如果执行.then时还是pending，就把成功和失败的回调保存到callbacks数组中，等resolve或reject时再取出执行
      if (this.status == PENDING) {
        this.callbacks.push({
          onResolved: function () {
            callback(onResolved);
          },
          onRejected: function () {
            callback(onRejected);
          },
        });
      }
    });
  }
}
