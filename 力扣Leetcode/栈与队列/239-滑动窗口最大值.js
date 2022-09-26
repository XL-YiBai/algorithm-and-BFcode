/**
 * 使用单调队列，队列一直单调递减。队首就是最大值
 * 当加入一个元素时，把队伍末尾小于这个元素的依次都弹出，因为他们不可能成为最大值了，都比当前要入队的小。
 * 当删除一个元素时，如果这个元素就等于队首的元素，就弹出队首，，接下来在队首的也会是最大值。
 */
var maxSlidingWindow = function (nums, k) {
  class MonoQueue {
    constructor() {
      this.queue = [];
    }
    // 入队
    enqueue(value) {
      let back = this.queue[this.queue.length - 1]; // 队列最后一个
      // 如果要推入队尾的元素，比当前队尾元素大，，把队尾小于当前要加入元素的全部弹出。
      while (back !== undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      // 最后再放入当前元素
      this.queue.push(value);
    }
    // 出队
    dequeue(value) {
      let front = this.front(); // 队列第一个
      // 如果出队的值是队首，说明要删除的是当前队首，也就是最大的
      if (value === front) {
        this.queue.shift();
      }
    }
    // 拿到队首，也就是目前最大值
    front() {
      return this.queue[0];
    }
  }

  let helperQueue = new MonoQueue();
  let i = 0;
  let j = 0;
  // 先入队第一个区间
  while (j < k) {
    helperQueue.enqueue(nums[j]);
    j++;
  }
  let ans = [];
  ans.push(helperQueue.front()); // 第一个区间最大值
  // 依次把窗口后移动，出队窗口第一个，加入窗口末尾的后一个
  while (j < nums.length) {
    helperQueue.dequeue(nums[i]);
    helperQueue.enqueue(nums[j]);
    i++;
    j++;
    ans.push(helperQueue.front()); // 操作完之后，求当前最大值
  }
  return ans;
};
