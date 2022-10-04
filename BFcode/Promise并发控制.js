class Scheduler {
  list = [];
  maxNum = 2;

  add(task) {
    this.list.push(task); // 添加任务到list列表
  }

  doNext() {
    if (this.list.length > 0) {
      this.list
        .shift()() // 执行任务
        .then(() => {
          this.doNext(); // 执行完当前任务之后，取下一个任务执行
        });
    }
  }

  start() {
    for (let i = 0; i < this.maxNum; i++) {
      this.doNext();
    }
  }
}

// 用于模拟任务，，time时间之后完成的一个Promise
const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time));

const scheduler = new Scheduler();

// 添加任务，time时间之后完成，order表示序号
const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};

// 添加任务
addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);

// 如果控制最大并发两个执行，那么应该输出 2 3 1 4
// 如果四个一起执行，那么只能输出 3 4 2 1
scheduler.start();
