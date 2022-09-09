// 构造函数
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
// 入队
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
// 出队
MyQueue.prototype.pop = function () {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  const ans = this.stack2.pop();
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return ans;
};

/**
 * @return {number}
 */
// 队首元素
MyQueue.prototype.peek = function () {
  return this.stack1[0];
};

/**
 * @return {boolean}
 */
// 队列是否为空
MyQueue.prototype.empty = function () {
  return this.stack1.length == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
