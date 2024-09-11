// 找出一个目录下文件名为aaa.txt且其内容包含“bbb”字符串的文件，目录中包含子目录，找出所有符合条件的文件

// const fs = require('fs')
// const path = require('path')

// const dirPath = path.join(__dirname, './dir')
// const ans = []

// function getFiles(directoryPath) {
//   fs.readdirSync(directoryPath).forEach((fileName) => {
//     const filePath = path.join(directoryPath, fileName)
//     const stat = fs.lstatSync(filePath)
//     if (stat.isDirectory()) {
//       getFiles(filePath)
//     } else {
//       if (fileName === 'aaa.txt') {
//         const content = fs.readFileSync(filePath).toString()
//         if (content.includes('bbb')) {
//           ans.push(filePath)
//         }
//         // console.log(content.toString())
//       }
//     }
//   })
// }

// getFiles(dirPath)

// console.log(ans)

const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
const PENDING = 'pending'

class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.callbacks = []
    this.result = null
    const self = this

    function resolve(data) {
      if (self.status !== PENDING) {
        return
      }
      self.result = data
      self.status = FULFILLED

      self.callbacks.forEach((item) => {
        item.onResolved(data)
      })
    }

    function reject(res) {
      if (self.status !== PENDING) {
        return
      }
      self.result = res
      self.status = REJECTED

      self.callbacks.forEach((item) => {
        item.onRejected(res)
      })
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onResolved, onRejected) {
    const self = this
    if (typeof onResolved !== 'function') {
      onResolved = (value) => value
    }
    if (typeof onRejected !== 'function') {
      onRejected = (reason) => {
        throw reason
      }
    }
    return new MyPromise((resolve, reject) => {
      function callback(cb) {
        try {
          const result = cb(self.result)
          if (result instanceof MyPromise) {
            result.then(
              (v) => resolve(v),
              (r) => reject(r)
            )
          } else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }

      if (self.status === FULFILLED) {
        setTimeout(() => {
          callback(onResolved)
        })
      }
      if (self.status === REJECTED) {
        setTimeout(() => {
          callback(onRejected)
        })
      }
      if (self.status === PENDING) {
        self.callbacks.push({
          onResolved: function () {
            callback(onResolved)
          },
          onRejected: function () {
            callback(onRejected)
          },
        })
      }
    })
  }
}
