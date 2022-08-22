// 生成节点的构造函数
var ListNode = function (val, next) {
  this.val = val;
  this.next = next;
};

// 初始化链表
var MyLinkedList = function () {
  this.head = new ListNode(0, null);
  this.size = 0; // 记录节点个数
};

/**
 * @param {number} index
 * @return {number}
 */
// 查找对应index的节点值，index不合法返回-1
MyLinkedList.prototype.get = function (index) {
  if (index >= this.size || index < 0) {
    return -1;
  }
  let p = this.head;
  for (let i = 0; i <= index; i++) {
    p = p.next;
  }
  return p.val;
};

/**
 * @param {number} val
 * @return {void}
 */
// 在链表第一个元素前加一个值为val的节点
MyLinkedList.prototype.addAtHead = function (val) {
  let p = this.head.next;
  this.head.next = new ListNode(val, p);
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
// 在链表末尾追加一个值为val的节点
MyLinkedList.prototype.addAtTail = function (val) {
  let p = this.head;
  for (let i = 0; i < this.size; i++) {
    p = p.next;
  }
  p.next = new ListNode(val, null);
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
// 在index的位置之前添加一个值为val的节点
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  } else if (index < 0) {
    let temp = this.head.next;
    this.head.next = new ListNode(val, temp);
  } else {
    let p = this.head;
    for (let i = 0; i <= index - 1; i++) {
      p = p.next;
    }
    let t = p.next;
    p.next = new ListNode(val, t);
  }
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
// 如果index有效，删除链表中对应index位置的节点
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= 0 && index < this.size) {
    let p = this.head;
    for (let i = 0; i <= index - 1; i++) {
      p = p.next;
    }
    p.next = p.next.next;
    this.size--;
  }
};
