/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
  if (!head) {
    return head;
  }
  let ret = new ListNode(0, head); // 定义一个虚拟头节点指向链表
  let cur = ret; // 当前遍历节点的前一个节点
  while (cur.next) {
    // 当下一个节点的值等于val，就删掉，否则将遍历节点后移一位
    if (cur.next.val == val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return ret.next;
};
