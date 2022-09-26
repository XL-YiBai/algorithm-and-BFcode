/**
 * 1. 牛客上的，只实现on和emit
 */
class EventEmitter {
  // 补全代码
  constructor() {
    this.events = {};
  }
  on(type, fn) {
    if (!this.events[type]) {
      this.events[type] = [fn];
    } else {
      this.events[type].push(fn);
    }
  }
  emit(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach((cb) => cb(...args));
    }
  }
}

/**
 * 2. 有on，once只触发一次的，off解绑，emit触发。
 * 主要就是遍历的时候使用filter遍历，如果isOnce属性为true，说明是只要触发一次的，顺便筛选掉
 */
class EventBus {
  constructor() {
    this.events = {};
  }

  on(type, fn, isOnce = false) {
    const events = this.events;
    if (!events[type]) {
      events[type] = []; // 初始化 key 的 fn 数组
    }
    events[type].push({ fn, isOnce });
  }

  once(type, fn) {
    this.on(type, fn, true);
  }

  off(type, fn) {
    // 如果没有传fn，解绑这个type事件所有函数
    if (!fn) {
      this.events[type] = [];
    } else {
      // 否则，解绑单个 fn
      const fnList = this.events[type];
      if (fnList) {
        this.events[type] = fnList.filter((item) => item.fn !== fn);
      }
    }
  }

  emit(type, ...args) {
    const fnList = this.events[type];
    if (!fnList) return;

    // 注意，使用filter遍历，因为可能要过滤once绑定的
    this.events[type] = fnList.filter((item) => {
      const { fn, isOnce } = item;
      fn(...args);

      // 如果是once绑定的，只执行一次，就过滤掉
      if (!isOnce) {
        return true;
      } else {
        return false;
      }
    });
  }
}

// 功能测试
const e = new EventBus();

function fn1(a, b) {
  console.log("fn1", a, b);
}
function fn2(a, b) {
  console.log("fn2", a, b);
}
function fn3(a, b) {
  console.log("fn3", a, b);
}

e.on("key1", fn1);
e.on("key1", fn2);
e.once("key1", fn3);
e.on("xxxxxx", fn3);

e.emit("key1", 10, 20); // 触发 fn1 fn2 fn3

e.off("key1", fn1);

e.emit("key1", 100, 200); // 触发 fn2(因为fn1解绑了，fn3是once，只触发一次)
