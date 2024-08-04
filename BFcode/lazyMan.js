class LazyMan {
  constructor(name) {
    this.name = name
    this.tasks = []
    // 下面链式调用是同步的，依次会加入到tasks数组中，加入完之后在这里启动一下
    setTimeout(() => {
      this.next()
    }, 0)
  }

  // 取出任务执行下一个
  next() {
    const task = this.tasks.shift()
    if (task) {
      task()
    } else {
      console.log('任务执行完成')
    }
  }

  // 把sleep封装成一个任务，，这个任务执行时，在定时器结束之后再执行下一个
  sleep(seconds) {
    // 封装成一个任务函数
    const task = () => {
      console.log(`${this.name} 开始睡觉`)
      setTimeout(() => {
        console.log(`${this.name} 已经睡了 ${seconds} 秒，开始执行下一个任务`)
        this.next() // 定时结束后，执行下一个任务
      }, seconds * 1000)
    }
    this.tasks.push(task)
    return this // 返回this，为了可以链式调用
  }

  eat(food) {
    // 封装成一个任务函数
    const task = () => {
      console.log(`${this.name} eat ${food}`)
      this.next() // 直接执行下一个，不需要等待
    }
    this.tasks.push(task)
    return this // 返回this，为了可以链式调用
  }
}

// 功能测试
const me = new LazyMan('小白')

// 这里同步执行完之后，只是会把所有任务都推入tasks中，然后通过next一个个取出来执行
me.eat('苹果').eat('香蕉').sleep(2).eat('葡萄').eat('西瓜').sleep(2).eat('橘子')
