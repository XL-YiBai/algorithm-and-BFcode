/*
  这道题最主要的还是理解题目的意思,输入上面是操作，下面是对应的数据
  最主要的是明白栈是后进先出，队列是先进先出，那我们不妨设立一个入队栈和一个出队栈
  入队直接压入入队栈，出队先检查出队栈是否为空，为空的话需要先把入队栈倒入出队栈，在进行出队操作，否则直接出队即可
 */

var CQueue = function() {
  this.inStack = []; // 入队栈
  this.outStack = []; // 出队栈
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function(value) {
  // 入队元素之间压进入队栈
  this.inStack.push(value);
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {
  // 如果两个栈都空，返回-1
  if (this.inStack.length === 0 && this.outStack.length === 0) return -1;
  // 如果出队栈有元素，直接pop()
  if (this.outStack.length > 0) return this.outStack.pop();
  // 否则，先把入队栈元素反向倒入出队栈
  while(this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
  } 
  // 再 return 出队栈栈顶元素
  return this.outStack.pop();
};

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/